export function Product(item, array) {
    const product = document.createElement('div')
    const product_inc = document.createElement('div')
    const name_prod = document.createElement('h2')
    const time_prod = document.createElement('h3')
    const edit_btn = document.createElement('button')
    const edit_img = document.createElement('img')
    const delete_btn = document.createElement('button')
    const img_delete = document.createElement('img')

    product.classList.add('product')
    product_inc.classList.add('product_inc')
    name_prod.classList.add('name_prod')
    if (item.isDone === true) {
        name_prod.classList.add('Done')
    }
    time_prod.classList.add('time_prod')
    edit_btn.classList.add('edit_btn')
    delete_btn.classList.add('delete_btn')
    edit_img.classList.add('edit_img')

    edit_img.src = 'https://www.hmanconstructoracr.com/wp-content/uploads/edit-300x300.png'
    img_delete.src = './svg/delete.svg'

    name_prod.innerHTML = item.title
    time_prod.innerHTML = new Date().toLocaleTimeString()

    product.append(product_inc)
    product_inc.append(name_prod, time_prod, edit_btn, delete_btn)
    delete_btn.append(img_delete)
    edit_btn.append(edit_img)

    delete_btn.onclick = () => {
        let idx = array.indexOf(item)
        array.splice(idx, 1)
        product.remove()
    }
    name_prod.onclick = () => {
        item.isDone = !item.isDone
        name_prod.classList.toggle('Done', item.isDone)
    }
    const dialog = document.querySelector('.dialog')
    const save_edit = document.querySelector('.save_edit')
    const new_name = document.querySelector('.new_name')
    edit_btn.onclick = () => {
        dialog.classList.add('show')
        save_edit.onclick = () => {
            dialog.classList.remove('show')
            const val = new_name.value
            name_prod.innerHTML = val
        }
    }
    

    return product
}
