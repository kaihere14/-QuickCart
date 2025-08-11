document.addEventListener('DOMContentLoaded',()=>{

    const products = [
        {id :  Date.now(),name : 'product 1' , price : 19},
        {id : Date.now(), name : 'product 2' , price : 29},
        {id : Date.now() , name : 'product 3' , price : 39},
        {id : Date.now() , name : 'product 4' , price : 49},
    ]

    const product_list = document.querySelector('#product-list')
    const cart_items = document.querySelector('#cart-items')
    const cart_empty = document.querySelector('#empty-cart')
    const cart_total = document.querySelector('#cart-total')
    const checkout = document.querySelector('#checkout-btn')
    const total_price = document.querySelector('#total-price')



        const cart_p = (t)=>{
        total = get_cartp()+t;
        localStorage.setItem('price',JSON.stringify(total))
    }
    const get_cartp = ()=>{
        return (JSON.parse(localStorage.getItem('price')) || 0)
        
    }




    setInterval(()=>{
        const cart = JSON.parse(localStorage.getItem('data')) || [];
        const cart_j = JSON.parse(localStorage.getItem('price')) || 0;
        if(cart != [] && cart_j !=0){
            cart_items.innerHTML =''
        cart.forEach((e,index)=>{
            const element = document.createElement('div')
            element.setAttribute('class','items2')
            element.innerHTML = `<span>${e.name} -- $${e.price}</span>
                                <button class = "remove">remove</button>`
            cart_items.appendChild(element)
            element.addEventListener('click',(q)=>{
                
                if(q.target.tagName ==='BUTTON'){
                    cart_p(-e.price)
                    let past =[];
                    cart.forEach((c,cindex)=>{
                        if(cindex!= index){
                            past.push(c)
                        }
                    })
                    set_item2(past)
                }
            })
        })
        cart_total.classList.remove('hidden')
        cart_total.innerHTML = `<p>Total: <span id="total-price">$${cart_j}</span></p>
                                <button id="checkout-btn">Checkout</button>`

    }else if (cart_j ==0){
        cart_items.innerHTML = `Your cart is empty.`
        cart_total.classList.add('hidden')
    }
    },1000)

  
    cart_total.addEventListener('click',()=>{
        cart_p(-get_cartp)
        set_item2([])
        alert('Ordered Succefully')
    })

let p;
let total =0;
    products.forEach((e)=>{
        const element = document.createElement('div')
        element.innerHTML = `<span>${e.name} -- $${e.price}</span> 
                             <button>Add</button>`
        element.setAttribute('class','product')
        product_list.appendChild(element)
            element.addEventListener('click',()=>{
               set_item(e)
              cart_p(e.price)
            })
})



const set_item2 = (k)=>{
    localStorage.setItem('data',JSON.stringify(k))
}


const set_item = (k)=>{
    let existing = localStorage.getItem('data')
    existing = existing ? JSON.parse(existing):[]
    existing.push(k)
    localStorage.setItem('data',JSON.stringify(existing))
    let ls_data = JSON.parse(localStorage.getItem('data')) || [];
    render(ls_data)
}




const render = (d)=>{
    cart_items.innerHTML = "",
    d.forEach((e)=>{
        const element = document.createElement('div')
        element.setAttribute('class','items2')
        element.innerHTML = `<span>${e.name} -- $${e.price}</span>
                                <button class = "remove">remove</button>`
        cart_items.appendChild(element)

    })
}
})