'use client'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store"; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Nayajiv Technologies" />
        <link rel="icon" href="favicon.ico" sizes="512x512" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
