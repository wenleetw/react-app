import React from 'react';

const data = { newsFeeds:[] };
for (var i = 1; i < 16; i++) {
  data.newsFeeds.push({
    id: i, 
    title: `This Is Title ${i}`, 
    content: `This is content ${i}`, 
    image: `https://picsum.photos/400/200?random&img=${Math.floor(Math.random() * 10) + 1}`, 
    tags: i%2 === 0 ? ['AAA','BBB']:['CCC','DDD']})
} 

export const initalContext = data;

export const FeedsContext = React.createContext(data);


// import React, { useState, createContext } from 'react';

// export const FeedsContext = createContext();
// export const FeedsProvider = props => {

//   const data =  { 
//     newsFeeds:[
//       {id:1, title:'This Is Title 1', content:'This is content 1', image:'https://picsum.photos/400/200'},
//       {id:2, title:'This Is Title 2', content:'This is content 2', image:'https://picsum.photos/400/200'},
//       {id:3, title:'This Is Title 3', content:'This is content 3', image:'https://picsum.photos/400/200'},
//       {id:4, title:'This Is Title 4', content:'This is content 4', image:'https://picsum.photos/400/200'},
//       {id:5, title:'This Is Title 5', content:'This is content 5', image:'https://picsum.photos/400/200'},
//       {id:6, title:'This Is Title 6', content:'This is content 6', image:'https://picsum.photos/400/200'},
//       {id:7, title:'This Is Title 7', content:'This is content 7', image:'https://picsum.photos/400/200'},
//       {id:8, title:'This Is Title 8', content:'This is content 8', image:'https://picsum.photos/400/200'},
//       {id:9, title:'This Is Title 9', content:'This is content 9', image:'https://picsum.photos/400/200'},
//       {id:10, title:'This Is Title 10', content:'This is content 10', image:'https://picsum.photos/400/200'},
//     ],
//     // otherFeeds:[
//     //   {id:11, title:'Title 11', content:'Content 11', image:'https://picsum.photos/400/200'},
//     //   {id:12, title:'Title 12', content:'Content 12', image:'https://picsum.photos/400/200'},
//     //   {id:13, title:'Title 13', content:'Content 13', image:'https://picsum.photos/400/200'},
//     // ]
//   }

//   const [feeds, setFeeds] = useState(data);

//   return (
//     <FeedsContext.Provider value={[feeds, setFeeds]}
//         initalValue={data} >
//       {props.children}
//     </FeedsContext.Provider>
//   );
// }
