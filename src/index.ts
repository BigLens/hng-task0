import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 4005;

app.use(express.json());

app.get('/me', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000,
    });

    const timestamp = new Date().toISOString();
    
    res.status(200).json({
      status: 'success',
      user: {
        email: 'adedejibioku@gmail.com',
        name: 'joel adedeji',
        stack: 'express'
      },
      timestamp: timestamp,
      fact: response.data.fact
    });
  } catch (error) {
    const timestamp = new Date().toISOString();
    
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
        return res.status(504).json({
          status: 'error',
          message: 'Cat Facts API request timed out',
          timestamp: timestamp
        });
      }
      
      if (error.response) {
        return res.status(502).json({
          status: 'error',
          message: 'Cat Facts API returned an error',
          timestamp: timestamp
        });
      }
      
      return res.status(503).json({
        status: 'error',
        message: 'Unable to reach Cat Facts API',
        timestamp: timestamp
      });
    }
    
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      timestamp: timestamp
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
