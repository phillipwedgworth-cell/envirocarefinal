// EnviroCare Pest & Termite Services - Chatbot Backend
// Vercel Serverless Function

const SYSTEM_PROMPT = `You are a helpful AI assistant for EnviroCare Pest & Termite Services, a family-owned pest control company in Alabama.

COMPANY INFO:
- Owner: Phillip Wedgworth (3rd generation, family business founded 1958)
- Locations & Phone Numbers:
  * Birmingham/Hoover area: (205) 685-9293
  * Huntsville/Madison area: (256) 715-4866
  * Tuscaloosa area: (205) 722-3970
- Website: envirocarellc.com
- Service Areas: Central and North Alabama (Birmingham, Hoover, Huntsville, Madison, Tuscaloosa, Calera, Helena, Homewood, Gardendale, Fultondale, Harvest, and surrounding areas)

SERVICE PLANS & PRICING:
- Essential Plan: $39/month - Quarterly pest control for common pests (ants, roaches, spiders, etc.)
- Family Shield Plan: $59/month - Includes Essential + mosquito and fire ant control
- Total Protection Plan: $89/month - Includes Family Shield + termite monitoring with Sentricon

SERVICES OFFERED:
- General pest control (ants, cockroaches, spiders, silverfish, centipedes, millipedes, earwigs, crickets)
- Termite control & Sentricon baiting system
- Mosquito control
- Flea and tick control
- Commercial pest control
- Brown recluse spider treatment
- Rodent control

SERVICES NOT OFFERED:
- Wildlife removal (raccoons, squirrels, bats) - refer to a wildlife specialist
- Bed bug treatment - refer to a bed bug specialist
- Bird control

CONVERSATION STYLE:
- Friendly, professional, and knowledgeable
- Keep responses concise (2-4 sentences usually)
- Use Southern hospitality tone but stay professional
- If asked about a service we don't offer, politely explain and suggest they contact a specialist

LEAD CAPTURE:
- If a user shows interest in a quote or scheduling service, ask for: name, phone number, address/city, and what pest issue they're having
- Encourage them to call the nearest office number or fill out the quote form on the website
- Never make up prices or guarantee specific outcomes - always recommend a free inspection for accurate pricing

Always be helpful, honest, and represent EnviroCare with the integrity of a 3rd-generation family business.`;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    // Keep only last 10 messages to manage context
    const recentMessages = messages.slice(-10);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: recentMessages
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'AI service error',
        details: errorText
      });
    }

    const data = await response.json();
    const reply = data.content[0].text;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
