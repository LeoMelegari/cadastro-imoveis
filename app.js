class App {
    addProperty() {
        event.preventDefault()
        var kind = document.querySelector("select[name='kind']").value
        var area = document.querySelector("input[name='area']").value
        var rented = document.querySelector("input[name='rented']").checked
        var property = new Property(kind, area, rented)
        this.addOnPropertyList(property)
        this.cleanForm()
    }

    addOnPropertyList(property) {
        var listElement = document.createElement('li')
        var propertyInfo = ` Tipo: ${property.kind} - Área: ${property.area}m²`
        if(property.rented) {
            var rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        }
        listElement.innerHTML += propertyInfo
        var remove = this.createRemoveButton()
        listElement.appendChild(remove)
        document.getElementById('properties').appendChild(listElement)
    }

    createRentedMark() {
        var rentedMark = document.createElement('span')
        rentedMark.style.color = 'white'
        rentedMark.style.backgroundColor = 'red'
        rentedMark.innerText = 'Alugado'
        return rentedMark
    }

    createRemoveButton() {
        var button = document.createElement('button')
        button.setAttribute('onclick', 'app.remove()')
        button.innerText = 'Remover'
        return button
    }

    cleanForm() {
        document.querySelector("input[name='area']").value = ''
        document.querySelector("input[name='rented']").checked = false
    }

    remove() {
        var liRemove = event.target.parentNode
        document.getElementById('properties').removeChild(liRemove)
    }
}