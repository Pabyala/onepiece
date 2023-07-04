import React from "react";
import "./ContextStoryStyle.css";
function EastBlueContext(props) {

  return (
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p3}</p>
          <p className="p-text">{props.p4}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p7}</p>
          <p className="p-text">{props.p8}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con-solo">
            <p className="p-text">{props.p9}</p>
            <p className="p-text">{props.p10}</p>
            <p className="p-text">{props.p11}</p>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle4}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p12}</p>
              <p className="p-text">{props.p13}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle5}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p14}</p>
              <p className="p-text">{props.p15}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p16}</p>
          <p className="p-text">{props.p17}</p>
          <p className="p-text">{props.p18}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle6}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p19}</p>
              <p className="p-text">{props.p20}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p21}</p>
          <p className="p-text">{props.p22}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle7}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p23}</p>
              <p className="p-text">{props.p24}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p25}</p>
        </div>
      </div>
    </div>
  );
}

function AlabastaContext(props) {
  return (
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con-solo">
            <p className="p-text">{props.p3}</p>
            <p className="p-text">{props.p4}</p>
            <p className="p-text">{props.p5}</p>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle4}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p10}</p>
          <p className="p-text">{props.p11}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle5}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p12}</p>
              <p className="p-text">{props.p13}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p14}</p>
          <p className="p-text">{props.p15}</p>
          <p className="p-text">{props.p16}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle6}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p17}</p>
              <p className="p-text">{props.p18}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>

          <p className="p-text">{props.p21}</p>
          <p className="p-text">{props.p19}</p>

          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p20}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkypieaContext(props) {
  return (
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p3}</p>
          <p className="p-text">{props.p4}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p9}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle4}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p10}</p>
              <p className="p-text">{props.p11}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
            <p className="p-text">{props.p12}</p>
            <p className="p-text">{props.p13}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p14}</p>
          <div className="image-sub-con one">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
        </div>
      </div>
    </div>
  );
}

function DavyBackFightContext(props) {
  return (
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
              <p className="p-text">{props.p3}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img"/>
            </div>
          </div>
          <p className="p-text">{props.p4}</p>
          <p className="p-text">{props.p5}</p>
          <p className="p-text">{props.p6}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WaterSevenContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img"/>
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img"/>
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con-solo">
            <p className="p-text">{props.p5}</p>
            <p className="p-text">{props.p6}</p>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img"/>
            </div>
          </div>
          <p className="p-text">{props.p9}</p>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle4}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p10}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img"/>
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p11}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function EniesLobbyContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img"/>
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img"/>
            </div>
          </div>
          <p className="p-text">{props.p5}</p>
          <div className="image-sub-con one">
            <img className="subImg" src={props.img4} alt="img"/>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img"/>
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img"/>
            </div>
          </div>
          <p className="p-text">{props.p10}</p>
          <p className="p-text">{props.p11}</p>
        </div>

      </div>
      

    </div>
  )
}

function ThrillerBarkContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p7}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p10}</p>
              <p className="p-text">{props.p11}</p>
              <p className="p-text">{props.p12}</p>
              <p className="p-text">{props.p13}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

function SabaodyArchipelagoContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con double">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con double">
              <img className="subImg double" src={props.img4} alt="img" />
              <img className="subImg double" src={props.img5} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con double">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con double">
              <img className="subImg double" src={props.img6} alt="img" />
              <img className="subImg double" src={props.img7} alt="img" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function AmazonLilyContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
              <p className="p-text">{props.p3}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p4}</p>
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function ImpelDownContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p9}</p>
              <p className="p-text">{props.p10}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MarinefordWarContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p8}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p9}</p>
              <p className="p-text">{props.p10}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p11}</p>
          <p className="p-text">{props.p12}</p>
        </div>
      </div>

    </div>
  )
}

function FishmanIslandContext(props) {
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p3}</p>
          <p className="p-text">{props.p4}</p>
          <p className="p-text">{props.p5}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p10}</p>
              <p className="p-text">{props.p11}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p12}</p>
              <p className="p-text">{props.p13}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle4}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p14}</p>
              <p className="p-text">{props.p15}</p>
              <p className="p-text">{props.p16}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p17}</p>
        </div>
      </div>
    </div>
  )
}

function PunkHazardContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
              <p className="p-text">{props.p5}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
        </div>
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con-solo">
            <p className="p-text">{props.p8}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

function DressrosaContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p5}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p8}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p9}</p>
              <p className="p-text">{props.p10}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p11}</p>
              <p className="p-text">{props.p12}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p13}</p>
          <p className="p-text">{props.p14}</p>
          <p className="p-text">{props.p15}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle4}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p16}</p>
              <p className="p-text">{props.p17}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ZouContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p3}</p>
          <p className="p-text">{props.p4}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p7}</p>
              <p className="p-text">{props.p8}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p9}</p>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p10}</p> 
              <p className="p-text">{props.p11}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WholeCakeIslandContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p3}</p>
          <p className="p-text">{props.p4}</p>
          <p className="p-text">{props.p5}</p>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle2}</h2>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
              <p className="p-text">{props.p7}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p8}</p>
              <p className="p-text">{props.p9}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p10}</p>
              <p className="p-text">{props.p11}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
        </div>

        <div className="story-details">
          <h2 className="subTitle">{props.subTitle3}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p12}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img6} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p13}</p>
          <p className="p-text">{props.p14}</p>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p15}</p>
              <p className="p-text">{props.p16}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
          </div>
          <p className="p-text">{props.p17}</p>
        </div>
      </div>
      
    </div>
  )
}

function LevelyContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img2} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con double">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con double">
              <img className="subImg double" src={props.img3} alt="img" />
              <img className="subImg double" src={props.img4} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con double">
              <p className="p-text">{props.p5}</p>
            </div>
            <div className="image-sub-con double">
              <img className="subImg double" src={props.img5} alt="img" />
              <img className="subImg double" src={props.img6} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img7} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandOfWanoContext(props){
  return(
    <div className="contextStory">
      <div className="story-hero">
        <h1 className="title">{props.titleStory}</h1>
        <div className="image-con">
          <img className="coverImg" src={props.img1} alt="img" />
        </div>
      </div>

      <div className="story-info">
        <div className="story-details">
          <h2 className="subTitle">{props.subTitle1}</h2>
          <div className="story-con odd">
            <div className="p-con double">
              <p className="p-text">{props.p1}</p>
              <p className="p-text">{props.p2}</p>
            </div>
            <div className="image-sub-con double">
              <img className="subImg double" src={props.img2} alt="img" />
              <img className="subImg double" src={props.img3} alt="img" />
            </div>
          </div>
          <div className="story-con even">
            <div className="p-con">
              <p className="p-text">{props.p3}</p>
              <p className="p-text">{props.p4}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img4} alt="img" />
            </div>
          </div>
          <div className="story-con odd">
            <div className="p-con">
              <p className="p-text">{props.p5}</p>
              <p className="p-text">{props.p6}</p>
            </div>
            <div className="image-sub-con">
              <img className="subImg" src={props.img5} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export {
  EastBlueContext,
  AlabastaContext,
  SkypieaContext,
  DavyBackFightContext,
  WaterSevenContext,
  EniesLobbyContext,
  ThrillerBarkContext,
  SabaodyArchipelagoContext,
  AmazonLilyContext,
  ImpelDownContext,
  MarinefordWarContext,
  FishmanIslandContext,
  PunkHazardContext,
  DressrosaContext,
  ZouContext,
  WholeCakeIslandContext,
  LevelyContext,
  LandOfWanoContext
};
