import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px",
      padding: "10px",
    }}>
      <h1>Fashion House</h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
    </div>
  );
}
const styles = { 
  title: { 
    fontSize: '2rem',
    textAlign: 'center',
    margin: '20px 0',
  }, 
  description: { 
    fontSize: '1.2rem',
    textAlign: 'center',
    margin: '10px 0',
  }, 
}; 
// Responsive styles using CSS-in-JS approach with media queries 
const responsiveStyles = ` 
@media (max-width: 768px) { 
.container { 
padding: 10px; 
}
.title {
font-size: 1.5rem; 
} 
.description {
font-size: 1rem; 
} 
} 
`; // Inject the responsive styles into the document head 
if (typeof window !== 'undefined') { 
  const styleSheet = document.createElement("style"); 
  styleSheet.type = "text/css"; 
  styleSheet.innerText = responsiveStyles; 
  document.head.appendChild(styleSheet); 
}
