import client from "@/apolloClient";
import Navbar from "@/components/Navbar";
import { ApolloProvider } from "@apollo/client";
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
