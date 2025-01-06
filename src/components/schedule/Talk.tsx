import './Talk.css';

import GitHubMarkImage from "../../imgs/github-mark.png";
import XLogoBlackImage from '../../imgs/x-logo-black.png';

type Speaker = {
  name: string;
  ImageSrc: string;
  XId?: string;
  GitHubId?: string;
}

type Session = {
  keynote?: boolean;
  id: number;
  title: string;
}

type Props = {
  speaker: Speaker;
  session: Session
}

export default function Talk({speaker, session}: Props) {
  return (
    <div class="talk">
      <div class="speaker-icon">
        <img src={speaker.ImageSrc} alt="Speaker" />
      </div>
      <div class="description">
        {session.keynote && <div class="keynote">
          <span>Keynote</span>
        </div>}
        <h3 class="session-title">
          {/* <a href={`tokyo12/talks/${session.id}`}></a> */}
          {session.title}
        </h3>
        <h4 class="speaker-name">{speaker.name}</h4>
        <div class="speaker-socials">
          {speaker.GitHubId && (
            <div class="social-github">
              <img src={GitHubMarkImage.src} alt="github logo"/>
              <a href={`https://github.com/${speaker.GitHubId}`}>
                @{speaker.GitHubId}
              </a>
            </div>
          )}
          {speaker.XId && (
            <div class="social-x">
              <img src={XLogoBlackImage.src} alt="x logo"/>
              <a href={`https://x.com/${speaker.XId}`}>
                @{speaker.XId}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
