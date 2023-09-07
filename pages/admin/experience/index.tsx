import React, { useState } from 'react';

const data = [
  {
    id: 1,
    firstName: 'Sebastian',
    lastName: 'Londoño',
    email: 'sebaslon@gmail.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2022',
      },
      {
        type: 'Certificado 2',
        title: 'Título 2',
        year: '2021',
      },
    ],
    isExpanded: false,
  },
  {
    id: 2,
    firstName: 'Sebastian',
    lastName: 'Londoño',
    email: 'sebaslon@gmail.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2023',
      },
      {
        type: 'Certificado 2',
        title: 'Título 2',
        year: '2022',
      },
      {
        type: 'Certificado 3',
        title: 'Título 3',
        year: '2021',
      },
      {
        type: 'Certificado 4',
        title: 'Título 4',
        year: '2022',
      },
      {
        type: 'Certificado 5',
        title: 'Título 5',
        year: '2021',
      },
    ],
    isExpanded: false,
  },
  {
    id: 3,
    firstName: 'Sebastian',
    lastName: 'Londoño',
    email: 'sebaslon@gmail.com',
    certificates: [],
    isExpanded: false,
  },
  {
    id: 4,
    firstName: 'Sebastian',
    lastName: 'Londoño',
    email: 'sebaslon@gmail.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2023',
      },
    ],
    isExpanded: false,
  },
  {
    id: 5,
    firstName: 'Sebastian',
    lastName: 'Londoño',
    email: 'sebaslon@gmail.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2023',
      },
    ],
    isExpanded: false,
  },
];

function CertificateTable({ rowData }) {
  if (!rowData.certificates || rowData.certificates.length === 0) {
    return null;
  }

  return (
    <table className='w-full border-collapse border-t mb-2'>
      <thead className='bg-gray-300'>
        <tr className='text-left'>
          <th className='py-4 px-4 border-gray-400'>Tipo</th>
          <th className='py-4 px-4 border-gray-400'>Titulo</th>
          <th className='py-4 px-4 border-gray-400'>Año que finalizó</th>
        </tr>
      </thead>
      <tbody>
        {rowData.certificates.map((certificate, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className='px-6 py-4 border-r border-gray-200'>
              {certificate.type}
            </td>
            <td className='px-4 py-2 border-r border-gray-200'>
              {certificate.title}
            </td>
            <td className='px-4 py-2'>{certificate.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Experience() {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleRowClick = index => {
    setExpandedRowIndex(index === expandedRowIndex ? null : index);
  };

  return (
    <div className='overflow-x-auto p-16'>
      <div className='shadow-lg'>
        <table className='w-full overflow-hidden border border-gray-200 shadow-md rounded'>
          <thead className='bg-colorCyan text-white'>
            <tr className='text-left'>
              <th className='py-3 px-6 border-r border-gray-200'>Nombre</th>
              <th className='py-3 px-6 border-r border-gray-200'>Apellidos</th>
              <th className='py-3 px-6 border-r border-gray-200'>Correo</th>
              <th className='py-3 px-6 border-r border-gray-200'>
                Certificados
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr
                  onClick={() => handleRowClick(index)}
                  className={`cursor-pointer ${
                    index === expandedRowIndex ? 'bg-gray-300' : ''
                  }`}
                >
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.firstName}
                  </td>
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.lastName}
                  </td>
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.email}
                  </td>
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.certificates.length > 0 ? 'Si' : 'No'}
                  </td>
                </tr>
                {index === expandedRowIndex && (
                  <tr>
                    <td colSpan='4'>
                      <CertificateTable rowData={item} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
