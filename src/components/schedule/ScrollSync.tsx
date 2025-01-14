import type { ComponentChildren, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';

type Props = {
  'client:only': boolean;
  stick: ComponentChildren;
  body: ComponentChildren;
}

const ScrollSync:FunctionComponent<Props> = (props) => {
  useEffect(()=>{
    const stick = document.getElementById("stick");
    const body = document.getElementById("body");

    stick?.addEventListener("scroll", () => {
      if(body){body.scrollLeft = stick.scrollLeft}
    });

    body?.addEventListener("scroll", () => {
      if(stick){stick.scrollLeft = body.scrollLeft}
    });
  }, [])

  return (
    <>
      {props.stick}
      {props.body}
    </>
  )
}

export default ScrollSync;
