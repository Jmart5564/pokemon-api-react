import song from './104-oak research lab.mp3';

export default function Audio() {
  return <audio controls>
    <source src={song} type="audio/mpeg"/>
  </audio>;
}
