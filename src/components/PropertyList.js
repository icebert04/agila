import React from 'react';
import Property from './Property';

export default function PropertyList({propertys}) {
if(propertys.length === 0){
    return(
        <div className="empty-search">
            <h3>unfortunately no properties were found</h3>
        </div>
    )
}


    return (
        <section className="propertyslist">
            <div className="propertyslist-center">
                {
                    propertys.map(item => {
                        return <Property key={item.id} property={item}/>;
                    })}
            </div>
        </section>
    );
}