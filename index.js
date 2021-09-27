import React, {useState , useEffect} from "react";

import "./styles.css";

function Home() {
  const [CODIGOPATRIMONIO, setCODIGOPATRIMONIO] = useState('')
  const [NUMERODESERIE, setNUMERODESERIE] = useState('')
  const [DESCRIÇÃO, setDESCRIÇÃO] = useState('')
  const [TIPO, setTIPO] = useState('')
  const [Acao, setAcao] = useState('')
 const [Things, setThings] = useState([])


  function handleAddCODIGOPATRIMONIO(event) {
    event.preventDefault();
    const data = {
      id: new Date().getTime(),
      CODIGOPATRIMONIO,
      NUMERODESERIE,
      DESCRIÇÃO,
      TIPO,
      Acao
    }
    if(CODIGOPATRIMONIO === '' || NUMERODESERIE === '' || DESCRIÇÃO === '' ||  TIPO === ''){
      alert('Favor preencher o campo que está vazio.')
      return
    }
   
  console.log(data)

    setThings([...Things,data])
  setCODIGOPATRIMONIO('')
  setNUMERODESERIE('')
  setDESCRIÇÃO('')
  setTIPO('')
  setAcao('')
  }

  function handleDelete(id) {
    setThings(Things.filter(thing => thing.id !== id ))
  }

  useEffect(() =>{
    function loadData() {
      const storageThings = localStorage.getItem('@cadcthings:things')
      if (storageThings) {
        setThings(JSON.parse(storageThings))
      }
    }
    loadData()
  }, [])
  useEffect(() => {
    function saveData() {
      localStorage.setItem('@cadcthings:things', JSON.stringify(Things))
    }
    saveData()
  }, [Things])

  return (

    <div className="page">
      <form className="CODIGOPATRIMONIO" onSubmit={handleAddIBGE}>
        <input
          name="CODIGOPATRIMONIO"
          placeholder="Digite seu CODIGOPATRIMONIO"
          type="text"
          value={CODIGOPATRIMONIO}
          onChange={(event) => setCODIGOPATRIMONIO(event.target.value)}
        />
        <input
          name="NUMERODESERIE"
          type="text"
          placeholder="Digite seu NUMERODESERIE"
          value={NUMERODESERIE}
          onChange={(event) => setNUMERODESERIE(event.target.value)}
        />
        
        <input
          name="DESCRIÇÃO"
          type="text"
          placeholder="Digite a DESCRIÇÃO"
          value={DESCRIÇÃO}
          onChange={(event) => setDESCRIÇÃO(event.target.value)}
        />

        <input
          name="TIPO"
          type="text"
          placeholder="Digite o TIPO"
          value={TIPO}
          onChange={(event) => setTIPO(event.target.value)}
        />
       
        <button type="submit">Enviar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th> CODIGOPATRIMONIO</th>
            <th>NUMERODESERIE</th>
            <th>DESCRIÇÃO</th>
            <th>TIPO</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {Things.map(thing => (
            <tr key={thing.id}>
              <td>{thing.CODIGOPATRIMONIO}</td>
              <td>{thing.NUMERODESERIE}</td>
              <td>{thing.DESCRIÇÃO}</td>
              <td>{thing.TIPO}
              <button
                className="Excluir"
                onClick={() => handleDelete(thing.id)}
                >
                Excluir
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </div>
  );
}

export { Home };