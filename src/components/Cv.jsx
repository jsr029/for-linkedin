import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
    faEnvelope,
    faMapMarker,
    faLink,
    faUser,
    faUserTie,
    faShoePrints,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import { fetchTreeData } from '../actions'

function Cv() {
    const dispatch = useDispatch()
    const dataCV = useSelector(state => state.cvReducer.data[0].resume[0])
    const title = Banner("Créateur de solutions")
    const alea = Math.random() * 10
    document.title = "jsr029 | Développeur d'applications ReactJs"
    document.getElementsByTagName("meta")[2].content = "Rakotonirina Jean-Sébastien, Développeur d'applications frontend, ReactJs"

    return (
        <>
            {title}
            <div className='jsr029_main' onLoad={dispatch(fetchTreeData())}>
                <div className='jsr029_main-left'>
                    <div className="jsr029_logo">
                        <img src="./images/Logo.jpg" alt="Logo" />
                        <h2>Rakotonirina Jean-Sébastien</h2>
                    </div>
                    <div className='jsr029_infos'>
                        <h2>Coordonnées</h2>
                        {dataCV && [dataCV].map((d, e) =>
                            <ul key={alea}>
                                <li><FontAwesomeIcon icon={faPhone} /> {d.cvData.contact.port}</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /> {d.cvData.contact.email}</li>
                                <li><FontAwesomeIcon icon={faMapMarker} /> {d.cvData.contact.city}</li>
                                <li><FontAwesomeIcon icon={faLink} /> {d.cvData.contact.site}</li>
                            </ul>
                        )}
                    </div>
                    <div className="jsr029_langues">
                        <h2>Langages</h2>
                        <ul>
                            {dataCV && [dataCV].map((g, e) => g.cvData.languages.map((m) => <li key={m.id}>{m.value}</li>)
                            )}
                        </ul>
                    </div>
                    <div className="jsr029_cms">
                        <h2>CMS</h2>
                        <ul>
                            {dataCV && [dataCV].map((g, e) => g.cvData.cms.map((m) => <li key={m.id}>{m.value}</li>)
                            )}
                        </ul>
                    </div>
                    <div className="jsr029_tools">
                        <h2>Outils</h2>
                        <ul>
                            {dataCV && [dataCV].map((g, e) => g.cvData.tools.map((m) => <li key={m.id}>{m.value}</li>)
                            )}
                        </ul>
                    </div>
                    <div className="jsr029_tools">
                        <h2>Qualités</h2>
                        <ul>
                            {dataCV && [dataCV].map((g, e) => g.cvData.quality.map((m) => <li key={m.id}>{m.value}</li>)
                            )}
                        </ul>
                    </div>
                    <div className="jsr029_interest">
                        <h2>Centres d'intérêt</h2>
                        <ul>
                            {dataCV && [dataCV].map((g, e) => g.cvData.Interest.map((m) => <li key={m.id}>{m.value}</li>)
                            )}
                        </ul>
                    </div>
                </div>
                <div className="jsr029_main-right">
                    <div className="jsr029_profil">
                        <h2><FontAwesomeIcon icon={faUser} /> Profil</h2>
                        {dataCV && [dataCV].map((d, i) =>
                            <p key={alea}>{d.profil}</p>
                        )}
                    </div>
                    <div className="jsr029_skills">
                        <h2><FontAwesomeIcon icon={faUserTie} /> Compétences</h2>
                        <ul>
                            {dataCV && [dataCV].map((g, e) => g.skills.map((m) => <li key={m.id}>{m.value}</li>)
                            )}
                        </ul>
                    </div>
                    <div className="jsr029_xp">
                        <h2><FontAwesomeIcon icon={faShoePrints} /> Experiences Professionnelles</h2>
                        {dataCV && [dataCV].map((g, e) =>
                            [g.xperiences].map((x) =>
                                [x.dev].map((a) => a.map((p) =>
                                    <div className='jsr029_xp-bloc' key={p.id}>
                                        <h3>{p.titre}<br />{p.location}</h3>
                                        <ul>
                                            {p.missions.map((o) =>
                                                <li key={o.id}>{o.value}</li>
                                            )}
                                        </ul>
                                    </div>
                                )))
                        )}
                    </div>
                    <div className="jsr029_formation">
                        <h2><FontAwesomeIcon icon={faGraduationCap} /> Formations</h2>
                        {dataCV && [dataCV].map((g, e) =>
                            [g.education].map((x) =>
                                [x.school].map((a) => a.map((p) =>
                                    <div className='jsr029_xp-bloc' key={p.id}>
                                        <h3>{p.title}</h3>
                                        <p>{p.location}</p>
                                    </div>
                                )))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cv