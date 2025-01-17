import classNames from "classnames/bind";

import styles from "./Offersection.module.scss";
import Image from "~/components/Image";
import images from "~/assets/images";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function OfferSection() {
    return ( 
        <section className={cx("container")}>
             <div className={cx("glassMan")}>
                <Image src={images.glassMan} className={cx("glassManImage")}></Image>
            </div>
             <div className={cx("wrapper")}>               
                   <div className={cx("dicribe")}>
                        <div className={cx("header")}>
                            <p className={cx("title")}>What we offer:</p>
                        </div>
                        <div className={cx("content")}>
                           <p className={cx("title")}> 
                              Solutions that will take your recruitment 
                              to the next level!
                            </p>                  
                        </div>
                        <div className={cx("footer")}>
                            <p className={cx("decription")}>
                            We build effective strategies that will help you reach 
                            employers worldwide.
                            </p>
                        </div>   
                   </div>  
                   <div className={cx("groupCard")}>
                      <div className={cx("groupCardNormal")}>
                         <Image src={icons.black_cv} className={cx("groupCardNormalImage")}></Image>
                         <div className={cx("groupCardNormalContent")}>
                            <p className={cx("groupCardNormalContentTitle")}>CV Build</p>
                            <div className="groupCardNormalContent1">
                                <p className={cx("decription")}>
                                We will design a job awarding professional Curriculum Vitae 
                                </p>
                            </div>
                         </div>
                      </div>
                      <div className={cx("groupCardHighlight")}>
                      <Image src={icons.courses} className={cx("groupCardHighlightImage")}></Image>
                         <div className={cx("groupCardHighlightContent")}>
                            <p className={cx("groupCardHighlightContentTitle")}>Courses</p>
                            <div className="groupCardHighlightContent1">
                                <p className={cx("decription")}>
                                We offer online courses that will help you build your portfolio
                                </p>
                            </div>
                         </div>
                      </div>
                      <div className={cx("groupCardNormal")}>
                      <Image src={icons.black_cv} className={cx("groupCardNormalImage")}></Image>
                         <div className={cx("groupCardNormalContent")}>
                            <p className={cx("groupCardNormalContentTitle")}>Seminars</p>
                            <div className="groupCardNormalContent1">
                                <p className={cx("decription")}>
                                We will design a job awarding professional Curriculum Vitae 
                                </p>
                            </div>
                         </div>
                      </div>
                      <Image src={icons.curve_up} className={cx("curve_up")}></Image>
                      <Image src={icons.curve_down} className={cx("curve_down")}></Image>
                   </div>           
             </div>
        </section>
     );
}

export default OfferSection;