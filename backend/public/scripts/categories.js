/******************************************************************************
 *                          Fetch and display categorys
 ******************************************************************************/

displayUsers()

function displayUsers () {
  httpGet('/api/categories')
    .then(response => response.json())
    .then((response) => {
      const allUsers = response.categories
      // Empty the anchor
      const allUsersAnchor = document.getElementById('all-categories-anchor')
      allUsersAnchor.innerHTML = ''
      // Append categories to anchor
      allUsers.forEach((category) => {
        allUsersAnchor.innerHTML += getUserDisplayElement(category)
      })
    })
}

function getUserDisplayElement (category) {
  return `<div class="category-display-ele">

        <div class="normal-view">
            <div>Name: ${category.name}</div>
            <button class="edit-category-btn" data-category-id="${category.id}">
                Edit
            </button>
            <button class="delete-category-btn" data-category-id="${category.id}">
                Delete
            </button>
        </div>
        
        <div class="edit-view">
            <div>
                Name: <input class="name-edit-input" value="${category.name}">
            </div>
            <button class="submit-edit-btn" data-category-id="${category.id}">
                Submit
            </button>
            <button class="cancel-edit-btn" data-category-id="${category.id}">
                Cancel
            </button>
        </div>
    </div>`
}

/******************************************************************************
 *                        Add, Edit, and Delete Users
 ******************************************************************************/

document.addEventListener('click', function (event) {
  event.preventDefault()
  const ele = event.target
  if (ele.matches('#add-category-btn')) {
    addUser()
  }
  else if (ele.matches('.edit-category-btn')) {
    showEditView(ele.parentNode.parentNode)
  }
  else if (ele.matches('.cancel-edit-btn')) {
    cancelEdit(ele.parentNode.parentNode)
  }
  else if (ele.matches('.submit-edit-btn')) {
    submitEdit(ele)
  }
  else if (ele.matches('.delete-category-btn')) {
    deleteUser(ele)
  }
}, false)

function addUser () {
  const nameInput = document.getElementById('name-input')
  const data = {
    category: {
      name: nameInput.value
    },
  }
  httpPost('/api/categories', data)
    .then(() => {
      displayUsers()
    })
}

function showEditView (categoryEle) {
  const normalView = categoryEle.getElementsByClassName('normal-view')[0]
  const editView = categoryEle.getElementsByClassName('edit-view')[0]
  normalView.style.display = 'none'
  editView.style.display = 'block'
}

function cancelEdit (categoryEle) {
  const normalView = categoryEle.getElementsByClassName('normal-view')[0]
  const editView = categoryEle.getElementsByClassName('edit-view')[0]
  normalView.style.display = 'block'
  editView.style.display = 'none'
}

function submitEdit (ele) {
  const categoryEle = ele.parentNode.parentNode
  const nameInput = categoryEle.getElementsByClassName('name-edit-input')[0]
  const id = ele.getAttribute('data-category-id')
  const data = {
    category: {
      name: nameInput.value,
      id: Number(id),
    },
  }
  httpPut('/api/categories/update/' + id, data)
    .then(() => {
      displayUsers()
    })
}

function deleteUser (ele) {
  const id = ele.getAttribute('data-category-id')
  httpDelete('/api/categories/delete/' + id)
    .then(() => {
      displayUsers()
    })
}

function httpGet (path) {
  return fetch(path, getOptions('GET'))
}

function httpPost (path, data) {
  return fetch(path, getOptions('POST', data))
}

function httpPut (path, data) {
  return fetch(path, getOptions('PUT', data))
}

function httpDelete (path) {
  return fetch(path, getOptions('DELETE'))
}

function getOptions (verb, data) {
  const options = {
    dataType: 'json',
    method: verb,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (data) {
    options.body = JSON.stringify(data)
  }
  return options
}

