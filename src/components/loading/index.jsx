import './styles.css';

function Loading() {
  return (
    <div id="backdrop">
    <div className="text-center loading">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
    </div>
  )
}

export default Loading
