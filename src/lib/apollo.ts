import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ouxhoa10tj01xt77922343/master',
    cache: new InMemoryCache()
});