<<<<<<< HEAD
import { toast } from "react-toastify"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import Title from "../../../core/components/title"

const campos = [
  {name: 'nome', label: 'Nome'},
  {name: 'descricao', label: 'Descriçao'},
]

const initialData = {
  nome: '',
  descricao: ''
}

const CadastroCategorias = () => {

  
  const cadastrar = async (data) => {
    await api.post('/categoria', data)

    toast.success('Categoria cadastrada com sucesso!')
  }


  return (
    <div>
      <Title
        title='Cadastrar Categorias'
      />
      <Form
        fields={campos}
        initialData={initialData}
        onSubmit={cadastrar}
      />    
    </div>
  )
}

=======
import { toast } from "react-toastify"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import Title from "../../../core/components/title"

const campos = [
  {name: 'nome', label: 'Nome'},
  {name: 'descricao', label: 'Descriçao'},
]

const initialData = {
  nome: '',
  descricao: ''
}

const CadastroCategorias = () => {

  
  const cadastrar = async (data) => {
    await api.post('/categoria', data)

    toast.success('Categoria cadastrada com sucesso!')
  }


  return (
    <div>
      <Title
        title='Cadastrar Categorias'
      />
      <Form
        fields={campos}
        initialData={initialData}
        onSubmit={cadastrar}
      />    
    </div>
  )
}

>>>>>>> 1927b48235d7816a6865ba5c91acc1711281c8e7
export default CadastroCategorias