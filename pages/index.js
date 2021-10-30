import Head from 'next/head'

import Header from '../comp/Header'
import NAV from '../comp/NAV'
import Results from '../comp/Results'

import requests from '../utils/requests'



export default function Home({results}) {

  return (
    <div >
      <Head>
        <title>HULU</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
   <NAV/>
   <Results results={results}/>
    </div>
  );
}


export async function getServerSideProps(context){
  const genre=context.query.genre;
  const request =await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || 

requests.fetchTrending.url}`)
.then(res=> res.json());


return{
 props:{
 results:request.results,
 },
};
}

// export async function getServerSideProps(context) {
//   const genre=context.query.genre;
//   const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url}`)
//   const data = await res.json()
//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: {
//      data
//     }, // will be passed to the page component as props
//   }
// }