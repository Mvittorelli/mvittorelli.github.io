const main = `<section class="indexWelc">
          <h3>* ~ Bienvenue sur mon portfolio ~ *</h3>
          <p>
            <span class="txtBold">Ça te plait ? </span> Normal, ça me ressemble,
            aller viens en apprendre un peu plus sur moi. <br />
            <span class="txtBold">Ça te plait pas ? </span>Pas grave jette
            quand-même un coup d'oeil ça fait pas de mal.
            <br />
          </p>
          <h3>Tu veux savoir ce que je sais faire ?</h3>
          <ul class="noBullet">
            <div>
              <li><h3>Programation</h3></li>
              <li>HTML <progress max="100" value="95"></progress></li>
              <li>CSS <progress max="100" value="80"></progress></li>
              <li>JS <progress max="100" value="65"></progress></li>
              <li>PHP <progress max="100" value="30"></progress></li>
              <li>SQL <progress max="100" value="15"></progress></li>
            </div>
            <div>
              <li><h3>Divers</h3></li>
              <li>Anglais <progress max="100" value="100"></progress></li>
              <li>Russe<progress max="100" value="12"></progress></li>
              <li>Sports<progress max="100" value="90"></progress></li>
              <li>Culture G<progress max="100" value="80"></progress></li>
              <li>Curieux<progress max="100" value="100"></progress></li>
            </div>
          </ul>
          <div class="indexWelcBanner">
            <img src="/assets/banner/autism.gif" alt="Autism" />
            <img src="/assets/banner/sceneKid.gif" alt="" />
            <img src="/assets/banner/iDontWannaGrowUp.gif" alt="" />
            <img src="/assets/banner/robotLol.gif" alt="" />
            <img src="/assets/banner/PARTYY.gif" alt="" />
            <img src="/assets/banner/luvMyPc.gif" alt="" />
            <img src="/assets/banner/mikuFan.gif" alt="" />
            <img src="/assets/banner/beGlad.gif" alt="" />
          </div>
        </section>
        <section class="scolaire">
          <h3>~ Mon parcour scolaire :</h3>
          <table>
            <tr>
              <th>2022</th>
              <th>2022 - 2024</th>
              <th>2024 - Aujourd'hui</th>
            </tr>
            <tr>
              <td>
                Obtention du DNB <br />
                mention Bien
              </td>
              <td>
                2nd & 1ère en bac pro SN à ORT LYON <br />
                (Système Numérique)
              </td>
              <td>Actuellement élève de 2nd année à EdenSchool Lyon</td>
            </tr>
          </table>
          <h3>~ Mes expériences pro :</h3>
          <table>
            <tr>
              <th>2023</th>
            </tr>
            <tr>
              <td>
                PFMP de 2nd pro. Réaliser à BOBST Lyon, j'ai du recréer
                l'interface de l'application qui controle les machines (avec
                DELPHI-XE5, Pascal Objet) ansi que faire quelque dessin
                vectoriel pour l'application (InkScape).
              </td>
            </tr>
          </table>
        </section>`;
const contact = `<div id="contact">
          <h1>Tu veux me contacter ?</h1>
          <h2>Voici tout les endroit ou tu peux m'écrire:</h2>
          <p>(précise bien que tu viens de mon portfolio stp)</p>
          <ul class="noBullet">
            <li>Mail: <span class="contact">mathieubibich@gmail.com</span></li>
            <li>
              Whatsapp / message:
              <span class="contact">+33 06 99 89 88 70</span>
            </li>
            <li>Discord: <span class="contact">jody727 </span></li>
            <li>Signal: <span class="contact">umbra.57</span></li>
            <li>Snapchat: <span class="contact">qidoriw</span></li>
          </ul>
          <div class="contactBanners">
            <img src="/assets/banner/science.gif" alt="science" />
            <img src="/assets/banner/beHappy.gif" alt="be happy" />
            <img src="/assets/banner/MIKUMIKU.gif" alt="miku fan" />
            <img src="/assets/banner/iLuvGlitter.gif" alt="i luv glitter" />
            <img src="/assets/banner/luckStart.gif" alt="lucky star" />
            <img src="/assets/banner/bakaX3.gif" alt="triple baka" />
          </div>
        </div>`;

const left = document.getElementById("left");

const homeBtn = document.getElementById("homeBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click", () => {
  left.innerHTML = main;
});

contactBtn.addEventListener("click", () => {
  left.innerHTML = contact;
});

// page buttons
