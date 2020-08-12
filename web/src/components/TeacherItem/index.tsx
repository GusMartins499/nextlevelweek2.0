import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/43645525?s=460&u=3f9919182401155e250f238e719908ce8304b12e&v=4" alt="Gustavo Martins" />
        <div>
          <strong>Gustavo Martins</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    <br /> <br />
    Natus earum rem consequatur iusto magnam. Nihil enim, recusandae, saepe quisquam, asperiores rem voluptates iusto obcaecati
    voluptas reiciendis ipsam corrupti ex necessitatibus!
  </p>

      <footer>
        <p>
          Preço/hora
      <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
      Entrar em contato
    </button>
      </footer>
    </article>
  )
}
export default TeacherItem;