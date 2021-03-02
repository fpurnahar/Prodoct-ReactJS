import React from 'react'

const TabelComponent = ({location, proformaInfoId, data}) => {
    return (
        <div className="col-12">
            <table className="table">
                <tr>
                {location.map(item=>(
                    <th>{item.name}</th>
                ))}
                <th>Kategori</th>
                <th>Produk</th>
                <th>Total Stock</th>
                <th>Percent %</th>
                <th>Total Order</th>
               
                </tr>

                <td>
                    {data.map(item=>{
                        let a = 0;
                    a = JSON.parse(item.product_stock)[0]["1"] || JSON.parse(item.product_stock)[0]["2"]
                    return(
                        <tr>{a}</tr>
                    )
                    })}
                </td>
                 <td>
                    {data.map(item=>{
                        let a = 0;
                    a = JSON.parse(item.product_stock)[1]["1"] || JSON.parse(item.product_stock)[1]["2"]
                    return(
                        <tr>{a}</tr>
                    )
                    })}
                </td>
                 <td>
                    {data.map(item=>(
                        <tr>{item.productDescription}</tr>
                    ))}
                </td>
                 <td>
                    {data.map(item=>(
                        <tr>{item.categoryDescription}</tr>
                    ))}
                </td>
                 <td>
                    {data.map(item=>{
                    let a = 0;
                    a = JSON.parse(item.product_stock)[0]["1"] || JSON.parse(item.product_stock)[0]["2"]
                    let b = JSON.parse(item.product_stock)[1]["1"] || JSON.parse(item.product_stock)[1]["2"]
                    return(
                        <tr>{a+b}</tr>
                        )
                   })}
                </td> 


                    <td>
                    {data.map(item=>{
                    let totalOrder = JSON.parse(item.items)[0]
                    let a = JSON.parse(item.product_stock)[0]["1"] || JSON.parse(item.product_stock)[0]["2"]
                    let b = JSON.parse(item.product_stock)[1]["1"] || JSON.parse(item.product_stock)[1]["2"]
                    let tot = a+b;
                    return(
                        <tr>{+totalOrder["387576"]/tot*100 || totalOrder["387577"]/tot*100 || totalOrder["387578"]/tot*100 }</tr>
                        )
                   })}
                </td> 

                 <td>
                    {data.map(item=>{
                    let a = 0;
                    a = JSON.parse(item.items)[0]
                    console.log(a)
                    return(
                        <tr>{a["387576"] || a["387577"]  || a["387578"] }</tr>
                        )
                   })}
                </td> 

                
                
            </table>
        </div>          
    )
}

export default TabelComponent
