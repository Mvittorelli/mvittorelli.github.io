const main = `<section class="indexWelc">
          <h2>* ~ Bienvenue sur mon portfolio ~ *</h2>
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
const more = `<section class="moreWelc">
          <h3>° ~ Tu veux savoir plus de choses sur moi ?</h3>
          <h3>Fou de sport</h3>
          <p>
            Je fais pas mal de sport, que ce soit de l'escalade en bloc, du
            skate, du street workout, ou même du vélo, je ne cesse de Bouger.
          </p>
          <div class="sportGallery">
            <img
              draggable="false"
              src="https://pomf2.lain.la/f/csarsmsv.png"
              alt="mes 2 skates"
            />
            <img
              draggable="false"
              src="https://pomf2.lain.la/f/1w1qtfqe.png"
              alt="la ou je grimpe"
            />
            <img
              draggable="false"
              src="https://pomf2.lain.la/f/3o33nslg.png"
              alt="vielle photo de moi"
            />
          </div>
          <h3>Fan de musique</h3>
          <p>
            J'écoute de tout, scene/scenecore, hyperpop, electro, hardstyle,
            tekk, industrial hardcore, nightcore, rock, métal, vocaloid ...
            j'aime vraiment tout. (tu peu utiliser la playlist pour te faire une
            idée)
          </p>
          <h3>Maximaliste</h3>
          <p>
            Tu l'aura sûrement remarqué, mais je ne suis pas du genre
            minimaliste. J'aime ajouter une multitude de détails à mes projets.
          </p>
          <h3>Touche à tout</h3>
          <p>
            Je suis quelqu'un d'êxtremement curieux, avec une passion par jours,
            je me retrouve à apprendre plein de choses sur un peu tout les
            domaines.
          </p>
          <h3>Jeux vidéos</h3>
          <p>
            Comme tout le monde, je joue à pas mal de jeux, la aussi je suis
            assez touche à tout, car j'aime autant les jeux de simulation
            millitaire (arma reforger, hell let looser, war thunder), que les
            jeux de rythmes (osu!, vivid/stasis, project sekai), des jeux de
            survie / aventure (raft, green hell, minecraft), ou des petits jeux
            aléatoire entre amis (one armed cook, on armed robber, dark hours)
          </p>
        </section>`;

const project = `<section id="list">
  

</section>`;

const left = document.getElementById("left");
left.innerHTML = main;

const homeBtn = document.getElementById("homeBtn");
const contactBtn = document.getElementById("contactBtn");
const infoBtn = document.getElementById("infoBtn");
const projectBtn = document.getElementById("projectBtn");

homeBtn.addEventListener("click", () => {
  left.innerHTML = main;
});

contactBtn.addEventListener("click", () => {
  left.innerHTML = contact;
});

infoBtn.addEventListener("click", () => {
  left.innerHTML = more;
});

projectBtn.addEventListener("click", () => {
  left.innerHTML = project;
  createProject();
});
