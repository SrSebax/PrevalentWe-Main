import React from 'react';

const data = [
  {
    tipo: 'Tecnología',
    titulo: 'Tecnólogo en Sistemas',
    institucion: 'Institución A',
    año: 2020,
  },
  {
    tipo: 'Bachillerato',
    titulo: 'Título 2',
    institucion: 'Institución B',
    año: 2021,
  },
  {
    tipo: 'Secundaria',
    titulo: 'Título 3',
    institucion: 'Institución C',
    año: 2022,
  },
  {
    tipo: 'Bachillerato',
    titulo: 'Título 4',
    institucion: 'Institución D',
    año: 2023,
  },
  {
    tipo: 'Primaria',
    titulo: 'Título 5',
    institucion: 'Institución E',
    año: 2024,
  },
];

function Experience() {
  return (
    <div className='overflow-x-auto p-16'>
      <div className='mb-4'>
        <a
          href='../academy'
          className='bg-colorCyan text-white font-bold py-2 px-4 rounded inline-block'
        >
          Agregar Certificado
        </a>
      </div>
      <div className='shadow-lg'>
        <table className='w-full overflow-hidden border border-gray-200 shadow-md rounded'>
          <thead className='bg-colorCyan text-white'>
            <tr className='text-left'>
              <th className='py-3 px-6 border-r border-gray-200'>Tipo</th>
              <th className='py-3 px-6 border-r border-gray-200'>Título</th>
              <th className='py-3 px-6 border-r border-gray-200'>
                Institución
              </th>
              <th className='py-3 px-6 border-r border-gray-200'>
                Año que finalizó
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className='py-4 px-6 border-r border-gray-200'>
                  {item.tipo}
                </td>
                <td className='py-4 px-6 border-r border-gray-200'>
                  {item.titulo}
                </td>
                <td className='py-4 px-6 border-r border-gray-200'>
                  {item.institucion}
                </td>
                <td className='py-4 px-6'>{item.año}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
