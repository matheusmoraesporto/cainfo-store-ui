interface Contact {
  email: string
  phone: string
  instagram: Instagram
}

interface Instagram {
  url: string
  username: string
}

const contact: Contact = {
  email: 'cainfounisinoss@gmail.com',
  phone: '',
  instagram: {
    url: 'https://www.instagram.com/cainfounisinos/',
    username: 'cainfounisinos'
  }
}

export default contact
