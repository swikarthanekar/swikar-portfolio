# f8n - Portfolio Dashboard & Investment Analytics

**f8n** is a finance and investment analytics platform designed to help users track, analyze, and manage their portfolios in one place. It integrates with **Upstox**, an Indian brokerage platform, to fetch real-time holdings and performance data. If no access token is provided, the app falls back to displaying sample data.

---

## Features

- **Dashboard**  
  - Track portfolio value, gains/losses, and asset allocation  
  - View top holdings and recent transactions  

- **Mutual Funds Agent**  
  - Insights and tracking for mutual fund investments  

- **Analysis Agent**  
  - Run analytics on portfolio performance  

- **Comparison Agent**  
  - Compare assets, funds, or stocks  

- **Watchlist Agent**  
  - Maintain and monitor a watchlist of assets  

- **Sentiment Agent**  
  - Analyze market sentiment  

- **Recommendations Agent**  
  - Get AI-driven recommendations  

- **News Agent**  
  - Stay updated with financial and market news  

---

## How it Works

1. **Login with Upstox Access Token**  
   Enter your Upstox access token to fetch real-time data.  

2. **Explore Dashboard & Agents**  
   Navigate through different sections such as portfolio analysis, comparisons, sentiment insights, recommendations, and news.  

3. **Fallback to Sample Data**  
   If no access token is provided, sample portfolio data is displayed.  

---

## Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/f8n.git
   cd f8n
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Run the development server:  
   ```bash
   npm run dev
   ```

4. Open in browser:  
   ```
   http://localhost:3000
   ```

---

## Tech Stack

- Next.js / React  
- Tailwind CSS  
- Integration with Upstox APIs  

---

## Notes

- Upstox token is required for real-time portfolio data.  
- Without a token, the app shows preloaded sample data.  

---

## License

This project is licensed under the MIT License.  

---

## Author

Developed as a financial analytics dashboard tool to simplify investment tracking and insights.  

