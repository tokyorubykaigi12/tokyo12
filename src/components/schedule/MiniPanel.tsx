import type {FunctionComponent} from 'preact';
import './MiniPanel.css';

const MiniPanel: FunctionComponent = (props) => {
  return (
    <div class="minipanel">
      {props.children}
    </div>
  )
}

export default MiniPanel;
