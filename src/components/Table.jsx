export default function Table({title, data}) {
  const keys = Object.keys(data[0]);
  return (
    <table>
      <caption>{title}</caption>
        <thead>
          <tr>
            {keys.map( (k, i) => (
              <th id={`tableHeader${i}`}>{k}</th>
            ))}
          </tr>  
        </thead>
      <tbody>
      {data.map( (u) => (
        <tr>
          {keys.map(k => (
          <td id={u[k]}>{u[k]}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
