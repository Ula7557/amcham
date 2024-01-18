import classes from "./about.module.scss";
import Prezident from "../../assets/images/prezident.jpg";

const AboutPrezident = () => {
    return (
        <div className="container">
            <div className={classes.aboutprezidentBlock}>
                <h1 className={classes.aboutTitletext}>President’s Note</h1>
                <div className={classes.aboutprezidentBlockInner}>
                    <img className={classes.prezidentImg} src={Prezident} alt=""/>
                    <p className={classes.prezidenttext}>Dear AmCham Members</p>
                    <p className={classes.prezidenttext}>
                        I am honored to be elected and serve as the President of the
                        American Chamber of Commerce in Uzbekistan. It has been a privilege
                        and a wonderful opportunity to meet members and leaders in our
                        community during the recent AGM and hear how our committed board of
                        directors, Executive Director, and staff can best serve you as the
                        Voice of the Business Community in Uzbekistan. I also want to thank
                        you for the warm welcome over the past month.
                    </p>
                    <p className={classes.prezidenttext}>
                        With nearly 20 years leading businesses in global organizations like
                        Coca-Cola, Unilever, and Mars and with leadership roles across
                        Chambers in multiple countries, I have a keen eye on ensuring that
                        our members derive direct value from their membership. Our mission
                        is to provide a venue, a network, content, and advocacy that
                        accelerates your ability to grow your business. I look forward to
                        working together to strategically position the Chamber as a convener
                        of thought leadership, a vehicle for engagement, and a leader in
                        business advocacy not just in Uzbekistan but within the region. I am
                        excited to build on our successes and continuously look for new
                        opportunities for growth.
                    </p>
                    <p className={classes.prezidenttext}>
                        The membership of AmCham Uzbekistan is impressive, with small and
                        large businesses, leading regional institutions, diverse
                        non-profits, and companies from a multitude of industry sectors
                        throughout the region. I encourage companies and business leaders to
                        engage with us to experience the value that the Chamber has to offer
                        to you and your business. Please attend an event, read our
                        newsletters, volunteer, or connect with your AmCham Team. I
                        encourage you to make the most of your membership.
                    </p>
                    <p className={classes.prezidenttext}>
                        I look forward to meeting you and working with you and your business
                        to continue growing Uzbekistan and the greater region.
                    </p>
                    <p className={classes.prezidenttext}>Sincerely,</p>
                    <p className={classes.prezidenttext}>Shadab Ahmed Khan</p>
                    <p className={classes.prezidenttext}>President, AmCham Uzbekistan</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPrezident;
