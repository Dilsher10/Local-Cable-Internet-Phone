// import React, { useState } from "react";
import "./dish-latino-espanol.scss";
// import SubNav from "../../components/sub-nav/SubNav";
// import { dishNavLinks } from "../../assets/data/navLinks/dishNavLinks";
import InnerPagesHeroTwo from "../../components/inner-pages-hero-two/InnerPagesHeroTwo";
import StickyHeader from "../../components/sticky-header/StickyHeader";
import dishlatinoreview from "../../assets/images/dishlatinoreview.png";
import star from "../../assets/images/star.png";
import { GoArrowUpRight } from "react-icons/go";
import dishlatino from "../../assets/images/dishlatino.png";
import dishcross from "../../assets/images/dishcross.png";
import quotationsIcon from "../../assets/images/quotations.svg";
import { IoThumbsDownSharp, IoThumbsUpSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/accordion/Accordion";
import PackageTable from "../../components/package-table/PackageTable";
import dotted from "../../assets/images/dotted.png";
import network from "../../assets/images/network.png";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Searchbar from "../../components/searchbar/Searchbar";
// import Newsletter from "../../components/newsletter/Newsletter";
import quotations from "../../assets/images/quotations.svg";

export const metadata = {
  title: "RevisiÓn De DISHLATINO: Planes, Precios Y MÁS"
};

const DishLatinoEspanol = () => {
  // const [faq, setFaq] = useState();
  let heroData = {
    card1: {
      logo: dishlatino,
      rating: "(4.5/5)",
      starImg: star,
      desc: "Mejor proveedor de TV",
      buttonText: "Compare Plans",
      linkPath: "#",
      buttonIcon: <GoArrowUpRight className="check-icon" />,
    },

    card2Img: dishlatinoreview,

    cardsStrip: [
      {
        subtitle: "proveedor de servicios.",
        title: "DISHLATINO",
        icon: dishcross,
      },
      {
        subtitle: "Canales:",
        title: "55–270+ (63 en español)",
        icon: dishcross,
      },
      {
        subtitle: "Precio:",
        title: "$56.99–$97.99/mes",
        icon: dishcross,
      },
      {
        subtitle: "DVR:",
        title: "500 HD hrs.",
        icon: dishcross,
      },
    ],

    tableData: [
      {
        head: [
          "Planes principales",
          "Precios",
          "Canales totales",
          "Canales en español",
          "DVR",
          "Details",
        ],

        body: [
          {
            content: [
              "1.",
              "DishLATINO Clásico",
              "$59.99/mes",
              "180+",
              "60",
              "500 HD hrs.",
            ],
            linkPath: "#",
          },

          {
            content: [
              "2.",
              "DishLATINO Max",
              "$97.99/mes",
              "270+",
              "63",
              "500 HD hrs.",
            ],
            linkPath: "#",
          },
        ],
      },
    ],

    bottomDesc:
      "Datos vigentes a partir de la fecha de publicación. Las ofertas y la disponibilidad pueden variar según la ubicación y están sujetas a cambios.",
  };
  let packageTableData = [
    {
      head: [
        "Planes principales",
        "Precios",
        "Canales",
        "Canales en español*",
        "DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DishLATINO Básico",
            "$56.99/mes",
            "55+",
            "33",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DishLATINO Clásico ",
            "$59.99/mes ",
            "180+",
            "60",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "DishLATINO Plus",
            "$66.99/mes",
            "190+ ",
            "62",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "DishLATINO Dos",
            "$85.99/mes",
            "225",
            "63",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "DishLATINO Max",
            "$97.99/mes",
            "290+",
            "63",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataTwo = [
    {
      head: [
        "Planes principales",
        "Precios",
        "Canales",
        "Canales en español*",
        "DVR",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "DishLATINO",
            "$56.99–$97.99/mes",
            "55–270+",
            "33–63",
            "500 HD hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "DIRECTV Spanish",
            "$54.99–$154.99/mes",
            "120–350+",
            "55–105",
            "200 hrs.",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Spectrum Mi Plan Latino",
            "$39.99/mes por 12 meses",
            "145+",
            "75+",
            "Varía",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  let packageTableDataThree = [
    {
      head: [
        "Planes principales",
        "Precios",
        "Canales",
        "Precios por complemento",
        "Canales en español",
        "Details",
      ],

      body: [
        {
          content: [
            "1.",
            "Cox",
            "$53.00–$132.00/mes",
            "75–250+",
            "$10.00/mes",
            "39",
          ],
          linkPath: "#",
        },
        {
          content: [
            "2.",
            "Optimum",
            "$75.00–$115.00/mes",
            "220–420+",
            "$12.95–$20.95/mes",
            "50+",
          ],
          linkPath: "#",
        },
        {
          content: [
            "3.",
            "Astound",
            "$59.99–$82.12/mes",
            "55–304+",
            "$13.00–$23.95/mes",
            "Hasta 40",
          ],
          linkPath: "#",
        },
        {
          content: [
            "4.",
            "Verizon ",
            "$70.00–$110.00/mes ",
            "125–425+ ",
            "$10.00/mes ",
            "49–53+ ",
          ],
          linkPath: "#",
        },
        {
          content: [
            "5.",
            "Xfinity ",
            "$60.00–$89.99/mes ",
            "125–260+ ",
            "$5.00–$16.95/mes ",
            "15–41+ ",
          ],
          linkPath: "#",
        },
      ],
    },
  ];
  // let accordionHandler = (i) => {
  //   if (faq === i) {
  //     return setFaq(null);
  //   }

  //   setFaq(i);
  // };
  return (
    <div className="dish-latino-espanol">
      {/* <SubNav links={dishNavLinks} /> */}
      <div className="section inner-hero">
        <div className="head">
          <h2 className="sect-heading">
            RevisiÓn De DISHLATINO: Planes, Precios Y MÁS
          </h2>
          <p className="sect-desc">
            Examinamos los precios, los canales, las promociones y el equipo de
            DishLATINO, y nuestra investigación revela que DishLATINO es muy
            bueno.
          </p>
        </div>
        <InnerPagesHeroTwo data={heroData} />
      </div>
      <StickyHeader />

      <div className="endnote is-dish-good">
        <div className="endnote-container">
          <Image src={quotationsIcon} alt="quotations" />
          <h4>¿Es bueno DishLATINO?</h4>
          <p>
            <span className="link">
              <Link href={"#"}> DishLATINO </Link>
            </span>{" "}
            es definitivamente bueno. Tiene el mismo alto número de canales, los
            precios económicos, la garantía de precio de dos años, el súper
            avanzado DVR Hopper 3, la excelente aplicación móvil y los
            inigualables controles parentales que nuestro mejor proveedor de
            televisión en general, DISH.
            <br />
            Pero ¿qué hay de lo latino de DishLATINO? Bueno, de sus 55 a más de
            270 canales, más de 63 son en español (solo por debajo de DIRECTV,
            que tiene más de 80 canales en español). Además, cuatro de los cinco
            paquetes de DishLATINO ofrecen casi todos esos canales, así que solo
            tendrás que decidir qué canales en inglés quieres. <br />
            DishLATINO también tiene la misma desventaja que DISH: opciones
            limitadas de paquetes.
          </p>
          <h4>Ventajas y desventajas de DISHLATINO TV</h4>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th>
                    Ventajas <IoThumbsUpSharp className="icon" />
                  </th>
                  <th>
                    Desventajas <IoThumbsDownSharp className="icon" />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>DVR Hopper 3</td>
                  <td>Opciones limitadas de paquetes de Internet/teléfono</td>
                </tr>
                <tr>
                  <td>Paquetes económicos</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Garantía de precio de 2 años </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Paquete multideportivo gratis * </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Todos los canales locales incluidos </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">* Con el America’s Top 120+ o superior.</p>
        </div>
      </div>

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Saltar a <span> enlaces importantes </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="all-links">
          <Link href={"#"}> Ofertas y promociones </Link>
          <Link href={"#"}> Compara planes de DishLATINO </Link>
          <Link href={"#"}> DishLATINO vs. la competencia </Link>
          <Link href={"#"}> Canales de DishLATINO </Link>
          <Link href={"#"}> DVR de DishLATINO </Link>
        </div>
      </div>

      <div className="section dish-network">
        <div className="head">
          <h2 className="sect-heading">
            Compara los planes y precios de <span> DISH Network </span>
          </h2>
          <p className="sect-desc">
            Si estás buscando una recomendación rápida para borrar de tu lista
            la tarea de “contratar servicio de TV”, sacamos las cuentas y
            creamos dos planes de DishLATINO que creemos te gustarán. Si la
            economía es lo que más te preocupa, DishLATINO Clásico ($59.99 al
            mes) tiene el mejor valor con más de 180 canales, incluyendo 60 de
            los 63 canales disponibles en español. Aunque los canales en inglés
            dejan mucho que desear, tendrás muchísimo contenido en español para
            disfrutar.
            <br />
            Si eres de familia bilingüe, querrás el mejor y más grande paquete:
            DishLATINO Max. Tiene más de 270 canales, incluyendo los 63 canales
            de transmisión en español.
          </p>
        </div>
        <PackageTable item={packageTableData} />
        <p className="below-table">
          Datos vigentes a partir de la fecha de publicación. Las ofertas y la
          disponibilidad pueden variar según la ubicación y están sujetas a
          cambios.
        </p>
        <div className="endnote is-dish-good">
          <div className="endnote-container">
            <Image src={dotted} alt="dotted" />
            <h4>Ofertas y promociones de DishLATINO</h4>
            <p>
              Las ofertas y promociones de DishLATINO son las mismas que{" "}
              <span className="link">
                <Link href={"#"}>las ofertas de DISH Network. </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="divider">
        <p>Ver Planes de DISHLATINO</p>
      </div>

      <div className="section dish-competition">
        <div className="head">
          <h2 className="sect-heading">
            DishLATINO <span> vs. la competencia </span>
          </h2>
          <p className="sect-desc">
            DishLATINO es uno de tan solo tres proveedores de TV que tienen
            paquetes enteros dirigidos a los clientes latinos, los otros son
            DIRECTV y Spectrum. DIRECTV tiene más canales en español que
            DishLATINO, precios más altos (incluso antes del alza de precios del
            segundo año) y un DVR menos potente. Spectrum ofrece un DVR de
            calidad todavía inferior, pero ofrece servicio sin contrato y
            precios mucho mejores.
            <br />
            Cox, Optimum, Astound, Verizon y Xfinity tienen al menos paquetes
            latinos complementarios. Ya que estos proveedores dan cobertura de
            forma colectiva a gran parte de los Estados Unidos, examinaremos sus
            paquetes complementarios para que puedas compararlos con DishLATINO.
          </p>
        </div>
        <PackageTable item={packageTableDataTwo} />
        <p className="below-table">
          Datos vigentes a partir de la fecha de publicación. Las ofertas y la
          disponibilidad pueden variar según la ubicación y están sujetas a
          cambios.
        </p>
      </div>

      <div className="section dish-provider">
        <div className="head">
          <h2 className="sect-heading">
            Paquetes <span> latinos complementarios </span> de otros proveedores
          </h2>
          <p className="sect-desc">
            Como puedes ver, estos paquetes complementarios latinos no tienen
            tantos canales como DishLATINO, DIRECTV o Spectrum. Además, la
            tarifa mensual de cada uno de estos paquetes incrementaría tu
            factura mensual entre un 6% y 40%. Y ninguno de estos proveedores
            tiene una garantía de precio de dos años como DishLATINO. Sin
            embargo, estos proveedores ofrecen cosas atractivas para latinos que
            DishLATINO no ofrece.
            <br />
            Verizon cuenta con cuatro planes latinos regionales diferentes
            (Región Mexicana, Región Caribeña, Región Sudamericana y Región
            Española), así puedes elegir el que mejor se adapte a tu identidad
            hispana, y puedes agregar regiones adicionales por solo $5/mes.
            Xfinity tiene una versión bilingüe de su tan elogiado control remoto
            de voz XR15 y el DVR X1 con un sinfín de funciones.
            <br />
            Verizon ofrece la mayor cantidad de canales que cualquier otro
            servicio por $110 al mes, y por solo $10 más al mes recibirás hasta
            53 canales en español. Cierto que Xfinity tiene una disponibilidad
            más amplia, pero los complementos extra de Xfinity Latino y el DVR
            X1 le aumentarían $42 a tu pago.Pero en general, creemos que
            DishLATINO es el camino a seguir, ya que tiene paquetes
            completamente latinos, el DVR más económico y avanzado y una
            garantía de precio de dos años.
          </p>
        </div>
        <PackageTable item={packageTableDataThree} />
        <p className="below-table">
          Datos vigentes a partir de la fecha de publicación. Las ofertas y la
          disponibilidad pueden variar según la ubicación y están sujetas a
          cambios.
        </p>
      </div>

      <div className="divider">
        <p>Obtener DISHLATINO</p>
      </div>

      <div className="section dish-latino">
        <div className="head">
          <h2 className="sect-heading">
            Canales y equipos de <span> DISHLATINO. </span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Canales de DishLATINO</h4>
          <p className="after-heading">
            Como mencionamos anteriormente, no todos los canales de los paquetes
            de DishLATINO son en español. Esto significa que entre 22 y 207
            canales de tu paquete también los encuentras en cualquier otro
            paquete de DISH. <br />
            Aquí está la lista completa de los canales en español de cada
            paquete, junto con una descripción de los canales que se incluyen en
            inglés.
          </p>
          <div className="custom-table">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Channels</th>
                  <th>DishLATINO Básico</th>
                  <th>DishLATINO Clásico</th>
                  <th>DishLATINO Plus</th>
                  <th>DishLATINO Dos</th>
                  <th>America’s Top 200 (240+ channels)</th>
                  <th>DishLATINO Max</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>1. </th>
                  <th>A&E </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>2. </th>
                  <th>ABC</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>3. </th>
                  <th>Afro</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>4. </th>
                  <th>American Heroes Channel (AHC)</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>5. </th>
                  <th>BBC America</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>6. </th>
                  <th>MTV Live</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>7. </th>
                  <th>Universo</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>8. </th>
                  <th>WE tv</th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <ImCross className="cross-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th> 9.</th>
                  <th>Z Living</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
                <tr>
                  <th>10. </th>
                  <th id="z">Zona Futbol</th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                  <th>
                    <FaCheck className="check-icon" />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="below-table">
            Datos vigentes a partir de la fecha de publicación. Las ofertas y la
            disponibilidad pueden variar según la ubicación y están sujetas a
            cambios.
          </p>
          <p className="after-heading">
            Aquí te presentamos una descripción rápida de los canales que no son
            en español incluidos en los paquetes de DishLATINO.
          </p>
          <ul>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO</Link>
              </span>{" "}
              Básico: Baby First, CSPAN, MLB Extra Innings, NHL Center Ice,
              canales de ventas y religiosos
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO</Link>
              </span>{" "}
              Clásico: Baby TV, Disney XD, Free Speech TV, NASA, muchos canales
              de música
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO</Link>
              </span>{" "}
              Plus: AMC, Cartoon Network, Fuse, MotorTrend, Nick Jr., Syfy, TBS,
              USA y más
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO</Link>
              </span>{" "}
              Dos: A&E, Animal Planet, Bloomberg, Bravo, Discovery Channel,
              Disney Channel, HGTV, IFC, Lifetime, MTV, National Geographic,
              Nickelodeon, OWN, Paramount Network, TLC, TNT y más
            </li>
            <li>
              ·{" "}
              <span className="link">
                <Link href={"#"}>DishLATINO</Link>
              </span>{" "}
              Max: ESPN, FOX Movie Channel, FS1, Freeform, FX, Hallmark Channel,
              Hallmark Drama, Hallmark Movies and Mysteries, HISTORY, MLB
              Network, NBA TV, THE MOVIE CHANNEL TM, Travel Channel, VH1 y más
            </li>
          </ul>
          <p className="after-heading">
            Atención a los cargos de activación de los Joeys. DISH cobra un
            cargo único de $50 al contratar el servicio si solicitas más de tres
            Joeys (más un Hopper 3). Además, aplica un cargo por cada Joey
            inalámbrico ($25) y 4K Joey ($50).
            <br />
            Todos los dispositivos anteriores vienen con el control remoto de
            voz de DISH, y se habla español.
          </p>
        </div>
        <div className="package-table-container channels">
          <Image src={network} alt="network" className="network" />
          <h4>Control remoto de voz de DISH</h4>
          <p className="after-heading">
            Los Hoppers y Joeys vienen con el control remoto de voz de DISH, que
            tiene teclas retroiluminadas (práctico), un localizador remoto (aún
            más práctico) y teclas de acceso directo programables (lo más
            práctico de todo). También hay disponibles modelos remotos con
            Asistente de Google integrado.
          </p>
        </div>
        <div className="package-table-container channels">
          <h4>Aplicación DISH Anywhere</h4>
          <p className="after-heading">
            La aplicación DISH Anywhere para iOS y Android te permite ver
            contenido en vivo, on-demand y contenido grabado fuera de casa.
            También sirve como un control remoto para los Hoppers y Joeys en
            caso de que los niños lo pierdan otra vez. Y si esto sucede, puedes
            usar la aplicación para configurar y administrar los controles
            parentales y darles una lección.
          </p>
          <hr />
          <div className="btn">
            <Link href={"#"}>Prueba al DISHLATINO</Link>
          </div>
        </div>
      </div>

      <div className="section final-take">
        <div className="head">
          <h2 className="sect-heading">
            Resumen final: <span> ¿Vale la pena DISHLATINO?</span>
          </h2>
          <p className="sect-desc">
            <span className="link">
              <Link href={"#"}> DishLATINO vale la pena,</Link>
            </span>{" "}
            siempre y cuando contrates el plan Plus, Dos o Max. Los planes
            Básico y Clásico son demasiado básicos, pero los otros tres planes
            tienen precios razonables y una generosa cantidad de canales en
            inglés como un bono a los canales disponibles en español (aunque
            Plus no tiene Nuestra Tele). Y no está de más tener el Hopper 3: es
            como un Pac-Man comelón al que le caben 2,000 horas de programación.
          </p>
        </div>
        <div className="all-links">
          <Link href={"#"}>Ver Planes de DISHLATINO</Link>
        </div>
      </div>

      <div className="section dish-faq">
        <div className="head">
          <h2 className="sect-heading">
            <span>DishLATINO </span> FAQ
          </h2>

          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Vitae in non ut eget neque
            amet nec. Morbi non ornare sagittis eu nibh. Mattis ultrices nunc
            eget venenatis pellentesque leo id at in. Sed eu nunc a laoreet
            vitae vestibulum mauris.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span>¿Cuánto cuesta DishLATINO?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  DishLATINO tiene cinco paquetes con precios que oscilan entre
                  los $56.99 y $97.99 al mes, y ofrecen entre 55 y 270 canales.
                  Los planes Plus, Dos y Max tienen los mismos canales en
                  español, pero no los mismos en inglés. A los paquetes Básico y
                  Clásico les faltan varios canales en español.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"1"}
            title={"¿Cuánto cuesta DishLATINO?"}
            cssClass={"faq-content"}
          >
            <p>
              DishLATINO tiene cinco paquetes con precios que oscilan entre los
              $56.99 y $97.99 al mes, y ofrecen entre 55 y 270 canales. Los
              planes Plus, Dos y Max tienen los mismos canales en español, pero
              no los mismos en inglés. A los paquetes Básico y Clásico les
              faltan varios canales en español.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> ¿DishLATINO tiene internet?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  Ni DishLATINO ni DISH ofrecen servicios de Internet, sin
                  embargo puedes combinar tu servicio de DISH con cualquir
                  proveedor de Internet disponible en tu barrio.Ingresa tu
                  código postal a continuación para ver si puedes recibir los
                  servicios de DishLATINO e Internet en donde vives.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"2"}
            title={" ¿DishLATINO tiene internet?"}
            cssClass={"faq-content"}
          >
            <p>
              Ni DishLATINO ni DISH ofrecen servicios de Internet, sin embargo
              puedes combinar tu servicio de DISH con cualquir proveedor de
              Internet disponible en tu barrio.Ingresa tu código postal a
              continuación para ver si puedes recibir los servicios de
              DishLATINO e Internet en donde vives.
            </p>
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span>¿Cuáles son los canales
                latinos de DISH?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  DishLATINO tiene{" "}
                  <span className="link">
                    <Link href={"#"}>un montonazo de canales</Link>
                  </span>{" "}
                  en español. Algunos de ellos no vienen en paquetes de nivel
                  inferior como DishLATINO Básico y Clásico. DishLATINO Plus no
                  ofrece Nuestra Tele, pero DishLATINO Dos y Max los tienen
                  todos.
                </p>
                <Searchbar />
              </div>
            </div>
          </div> */}
          <Accordion
            id={"3"}
            title={"¿Cuáles son los canales latinos de DISH?"}
            cssClass={"faq-content"}
          >
            <p>
              DishLATINO tiene{" "}
              <span className="link">
                <Link href={"#"}>un montonazo de canales</Link>
              </span>{" "}
              en español. Algunos de ellos no vienen en paquetes de nivel
              inferior como DishLATINO Básico y Clásico. DishLATINO Plus no
              ofrece Nuestra Tele, pero DishLATINO Dos y Max los tienen todos.
            </p>
            <Searchbar />
          </Accordion>
          {/* <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> ¿DishLATINO tiene Netflix?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  No te puedes suscribir a Netflix a través de DishLATINO, pero
                  puedes ver una suscripción a Netflix en el receptor/DVR Hopper
                  3 de DISH, que puedes recibir con los planes de DishLATINO.
                </p>
              </div>
            </div>
          </div> */}
          <Accordion
            id={"4"}
            title={" ¿DishLATINO tiene Netflix?"}
            cssClass={"faq-content"}
          >
            <p>
              No te puedes suscribir a Netflix a través de DishLATINO, pero
              puedes ver una suscripción a Netflix en el receptor/DVR Hopper 3
              de DISH, que puedes recibir con los planes de DishLATINO.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="section endnote dish-endnote">
        <div className="endnote-container">
          <Image className="quotation-img" src={quotations} alt="quotations" />
          <h4>Methodology:</h4>
          <p>
            Nuestros expertos en televisión pasan cientos de horas viendo e
            investigando DishLATINO y otras ofertas en español de proveedores de
            televisión por cable y satelital para decirte cuáles tienen los
            mejores canales en español, paquetes, precios, especificaciones y
            funciones. Para más información sobre cómo trabajamos, visita
            nuestra página
            <span className="link">
              <Link href={"#"}> Cómo clasificamos. </Link>
            </span>
          </p>
          <h4>Artículos relacionados</h4>
          <ul>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>DISH vs. DIRECTV</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Reseña de DIRECTV</Link>
              </span>
            </li>
            <li>
              {" "}
              ·{" "}
              <span className="link">
                <Link href={"#"}>Mejores Proveedores de TV</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default DishLatinoEspanol;
