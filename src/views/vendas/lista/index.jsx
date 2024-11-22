import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"

const ListarVendas = () => {
    const { data } = useSWR('/vendasConsultar', api.get)

    const navigate = useNavigate()

    const columns = [
        { accessor: 'produtos', label: 'Produtos' },
        { accessor: 'valor', label: 'Valor' },
        { accessor: 'quantidade', label: 'Qtd' },
    ]

    return (
        <div>
            <Table
                options={{
                    onClick: () => navigate('/vendas/cadastro')
                }}
                data={data?.data ?? []}
                columns={columns}
            />
        </div>
    )
}

export default ListarVendas