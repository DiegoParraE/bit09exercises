import React from 'react'
import Figure from 'react-bootstrap/Figure'



export const Home = () => {
  return (
    <section className='d-flex flex-column '>
        <h1 className='text-center'>Bienvenidos</h1>
        <Figure className='text-center' >
        <Figure.Image
            width={171}
            height={180}
            alt="Foto Diego Parra"
            src="./images/me.jpeg"
        />
        <Figure.Caption className='h2 text-dark'>
            Diego Parra
        </Figure.Caption>
        </Figure>
    </section>
  )
}
