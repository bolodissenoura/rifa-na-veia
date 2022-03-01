import styled from 'styled-components';

const ElementProgressBar = styled.div`
    .progress {
  background-color: #8a8a8a5c;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 15px;
  width: 50%;
}

.progress-value {
  animation: load 15s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background-color: #dd1d1d;
  height: 6px;
  width: 0;
}

@keyframes load {
  0% { width: 0; }
  100% { width: 60%; }
}
h2{
    padding-bottom: 10px;
}
span{
    padding-left: 20px;
    padding-bottom: 5px;
    font-size: 13px;
}

`





export default function ProgressBar() {

    return (
        <>
            <ElementProgressBar>

                <h2>Quase esgotado</h2>
                <div className="progress">
                    <div className="progress-value"></div>
                    <p><span>80%</span></p>
                </div>






            </ElementProgressBar>
        </>
    )
}

