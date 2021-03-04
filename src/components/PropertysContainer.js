import React from 'react';
import PropertyFilter from './PropertyFilter';
import PropertyList from './PropertyList';
import {withPropertyConsumer} from '../context';

function PropertysContainer({context}){
   const {Loading,sortedPropertys,propertys} = context;
   if (Loading) {
       return <Loading />;
   }
   
   return (
        <div>

            <PropertyFilter propertys={propertys}/>
            <PropertyList propertys={sortedPropertys}/>
        </div>
   )
}

export default withPropertyConsumer(PropertysContainer)

// import React from 'react';
// import PropertyFilter from './PropertyFilter';
// import PropertyList from './PropertyList';
// import {PropertyConsumer} from '../context';
// import Loading from '../components/Loading';
// export default function PropertysContainer() {
//     return (
//         <PropertyConsumer>
//         {value => {
//            const 
//            {loading,
//             sortedPropertys,
//             propertys} = value

//             if(loading){
//                 return <Loading/>;
//             }
//                 return (
//         <div>
//             hello from property con
//             <PropertyFilter propertys={propertys}/>
//             <PropertyList propertys={sortedPropertys}/>
//         </div>
//                 );
//             }
//         }     
//         </PropertyConsumer>
        
//     )
// }