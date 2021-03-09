import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { EVENT_WITH_SLUG } from '../../graphql/event.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import HeaderImg from '../../assets/detail_img_header.svg'
import BannerImage from '../../assets/WIDC/9.jpg'
import D4DLogo from '../../assets/WIDC/D4D Logo.png'
import GITLogo from '../../assets/WIDC/GIT_Logo_Chapter_Primary_Nepal_WEB.png'
import OKNLogo from '../../assets/WIDC/OK_LG_LOGO_NEPAL_RGB.png'
import WiSteamLogo from '../../assets/WIDC/WiSTEAM Logo.png'
import WLiTLogo from '../../assets/WIDC/WLiT_logo.png'
import TheAsiaFoundationLogo from '../../assets/WIDC/TAFVLogoTag-ai.png'
import UKAIDLogo from '../../assets/WIDC/UKaid Logo High Resolution for PRINT purposes.png'
import DevelopmentInitiativeLogo from '../../assets/WIDC/Development_Initiatives_Primary Logo_RGB-ai.png'
import Jyoti from '../../assets/WIDC/Jyoti Upadhyaya.jpg'
import Sumana from '../../assets/WIDC/Sumana Shrestha.jpg'
import Jamie from '../../assets/WIDC/Jamie Holton.jpg'
import {
  Grid,
  Image,
  Button
} from 'semantic-ui-react';

const DAY_MAP = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

const ConferenceHero = () => {
  return(
    <div style={pageStyles.conferenceHero}>
      <div><div style={pageStyles.titleBorderRight}><div style={pageStyles.titleBorderBottom}>
        <div style={pageStyles.boxLeft}/>
        <br/>
        <h1 style={pageStyles.categoryTitle}>WOMEN IN DATA VIRTUAL CONFERENCE</h1>
        <h2>"Leveraging the Power of Women,<br/> Data and Technology"</h2>
        <div><Button color="blue" as="a" href="https://asiafoundation.zoom.us/meeting/register/tJYode2orjoqE92wbQZVUY0Bdoa4KWN2w4Pr">REGISTER HERE</Button></div>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <div>WHEN</div>
              <br/>
              <div>
                <div>
                  <b>20th March, 2021</b>
                </div>
                <div>
                  <b>Saturday</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div>TIME</div>
              <br/>
              <div>
                <b>
                  12:30 PM - 06:00 PM
                </b>
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
              <div>CONFERENCE AT</div>
              <br/>
              <div>
                <b>
                  ZOOM
                </b>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
      </div></div></div>
    </div>
  )

}

const AboutEvent = () => {
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.subtitle}>About the Conference</div>
      <div style={pageStyles.middleTitleUnderline}/>
      <br/>
        <div style={pageStyles.description}>
          This virtual, half conference will feature an all-female lineup of panelists from academia to entrepreneurs, to talk about the latest experiences in a number of domains and the opportunities women have in this ever booming industry in Nepal and the global field. With this year’s theme being Leveraging the Power Women, Data and Technology, the conference will include panel discussions with prevalent women working from Nepal’s expanding data and tech sector and a short presentation covering the state of STEM education for females in Nepal.
        </div>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

const People = () => {
  return(
    <div style={pageStyles.people}>
      <div style={pageStyles.peopleDescription}>Opening Remarks</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Lisa Honan</b>
            <div>Development Director</div>
            <div>British Embassy Nepal</div>
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Meghan Nalbo</b>
            <div>Country Representative</div>
            <div>The Asia Foundation</div>
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Craig Irwin</b>
            <div>Statistician</div>
            <div>FCDO</div>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Introductory Speaker</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Tina Rosario</b>
            <div>Women in Big Data</div>
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>The Leadership Panel: Leveraging Data for Digital Future by GiT</div>
      <br/>
      <Grid stackable >
        <Grid.Row>

          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={12} style={pageStyles.peopleDetail}>
            <Image src={Jyoti} style={pageStyles.peopleImage}/>
            <div><b>Jyoti U. Devkota</b></div>
            <div>Professor, Department of Mathematics</div>
            <div>Kathmandu University</div>
            <br/>
            <div style={pageStyles.bio}>Jyoti U. Devkota, completed Bachelors (Honors) and Masters in Mathematical Statistics from Lady Shriram College, New Delhi India. She completed her PhD.  from the Department of Computer Science and Mathematics, University of Osnabrueck, Germany, with DAAD fellowship. She is a Professor in the Department of Mathematics, Kathmandu University, Nepal. She has a teaching experience of more than 25 years at this university. She has over 25 first authored publications in international peer reviewed journals. She has served as the Head of the Department of Natural Sciences, Kathmandu University from Oct. 2013 to April 2017. She has presented papers in several national and international conferences. Jyoti U Devkota has also written three books on Statistics and Data Analysis.</div>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={12} style={pageStyles.peopleDetail}>
            <br/>
            <br/>
            <br/>
            <Image src={Sumana} style={pageStyles.peopleImage}/>
            <div><b>Sumana Shrestha</b></div>
            <br/>
            <div style={pageStyles.bio}>Sumana is the managing partner of Kosi Collaborative. Kosi Collaborative (Kosi) is a technology and management consulting company that works at the intersection of data and research in South Asia, with the objective of helping clients realize the potential of their data and harness the power of data-driven decision making. She has an MBA from MIT Sloan School of Business, and Bachelors in Mathematics and Economics from Bryn Mawr College. She is a published mathematician in Topology and Geometry. Formerly, she was a consultant with the Boston Consulting Group, and financial analyst at Citigroup, NY.</div>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={12} style={pageStyles.peopleDetail}>
            <br/>
            <br/>
            <br/>
            <Image src={Jamie} style={pageStyles.peopleImage}/>
            <b>Jamie Holton</b>
            <div>Project Management and Research Officer</div>
            <div>Publish What You Fund</div>
            <br/>
            <div style={pageStyles.bio}>Jamie Holton is Project Management and Research Officer for Publish What You Fund, the global campaign for aid and development transparency. She oversees the Gender Financing Project, which aims to get a clear picture of funding towards gender equality in Kenya, Nepal and Guatemala so we can hold governments and funders to account on their gender equality commitments and understand which initiatives make societies more equal. Jamie previously worked for Save the Children, UNOCHA, the Dutch MFA and the Dutch National Rapporteur on Trafficking in Human Beings and Sexual Violence against Children. She holds an MSc in International Development & Humanitarian Emergencies from the London School of Economics, and an MA in International Relations from Leiden University in The Netherlands.</div>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>

        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Presentation: Role of Technology in STEM for Nepal by WiSTEM</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={3} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Binita Shrestha</b>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Craig Irwin</b>
            <div>Statistician</div>
            <div>FCDO</div>
          </Grid.Column>
          <Grid.Column width={3} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Panel Discussion: Women in Tech and Data for Problem Solving by WLiT</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Rumee Singh</b>
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Princi Koirala</b>
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Aradhana Gurung</b>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Closing Remarks</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage}/>
            <b>Carolyn O’Donnal</b>
            <div>The Asia Foundation</div>
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Organization = () => {
  return(
    <div style={pageStyles.organization}>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={4}>
            <div><h3>Organized By</h3></div>
            <div style={pageStyles.organizingMember}>
              <br/>
              <Image src={D4DLogo} style={pageStyles.orgImage}/>
              <br/>
              <b>Data for Development</b>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <div><h3>In partnership with</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {[
                  {logo:GITLogo, name:'Girls in Tech Nepal'},
                  {logo:OKNLogo, name:'Open Knowledge Nepal'},
                  {logo:WiSteamLogo, name:'Women in STEAM'},
                  {logo:WLiTLogo, name:'Women Leader in Technology'},
                ].map((x, idx)=>(
                  <Grid.Column key={idx} width={4} style={pageStyles.organizingMember}>
                    <Image src={x.logo} style={pageStyles.orgImage}/>
                    <br/>
                    <b>{x.name}</b>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Participants = () => {
  return(
    <div style={pageStyles.participants}>
      <div style={pageStyles.subtitle}>Who can participate</div>
      <br/>
      <br/>
      <div>
        Although named "Women in Data" Conference, the event is open to attendees of any gender. Whether a current worker in Nepal’s data and tech field, or of casual interest, we encourage the participation of individuals from all professions and different sectors with various backgrounds.
      </div>

    </div>
  )
}

const Supporters = ({post}) => {
  return(
    <div style={pageStyles.organization}>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={16}>
            <div><h3>Supported By</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {[
                  {logo:TheAsiaFoundationLogo, name:'The Asia Foundation'},
                  {logo:UKAIDLogo, name:'UK AID'},
                  {logo:DevelopmentInitiativeLogo, name:'Development Initiative'},
                ].map((x, idx)=>(
                  <Grid.Column key={idx} width={3} style={pageStyles.organizingMember}>
                    <Image src={x.logo} style={pageStyles.orgImage}/>
                    <br/>
                    <b>{x.name}</b>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}


const EventDetail = () => {
  return (
    <PageLayout title="Women in data conference" format="conferenceread" headerImage={HeaderImg} noHero>
        <ConferenceHero {...{bgColor: 'rgba(252,202,53,0.91)', bgImageLink: BannerImage}} />
        <AboutEvent />
        <People {...{bgColor:'#F7F7F7'}}/>
        <Organization />
        <Participants {...{bgColor:'#F5BA00'}}/>
        <Supporters />
    </PageLayout>
  );

};

export default EventDetail;


const pageStyles = {
  conferenceHero: {textAlign: 'center', padding: 50},
  description: {fontSize: 18, paddingTop:20, marginTop: 15, textAlign: 'center', lineHeight:1.4},
  subtitle: {fontWeight: 'bold', fontSize: 26, marginTop: 40, textAlign: 'center'},
  peopleDescription: {fontWeight: 'bold', fontSize: 24, marginBottom: 40, textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '100px', marginRight: 'auto', marginLeft: 'auto', marginTop: 15 },
  categoryTitle: {borderBottom: '4px solid #252323', width: 'fit-content', margin: 'auto', paddingBottom: 10},
  people: {marginRight:'auto',marginLeft:'auto',marginTop: 50, paddingTop: 80, paddingBottom: 80, fontSize: 18},
  peopleDetail: {fontSize: 18, textAlign: 'center', lineHeight: 1.4},
  peopleImage: {backgroundColor: 'grey', border: '1px solid #eee', margin:'auto', marginBottom: 10, maxHeight:400},
  organizingMember: {fontSize: 18, textAlign:'center'},
  orgImage: {border: '1px solid #eee', margin:'auto', maxHeight:200, width:'auto'},
  partnerImage: {maxWidth:200, height: 'auto',  border: '1px solid #eee', margin:'auto'},
  organization: {marginTop: 80, marginBottom: 80},
  participants: {
    paddingTop: 10,
    paddingBottom: 80,
    textAlign: 'center',
    fontSize: 18
  },
  bio: { fontWeight: 200 },
  titleBorderRight: {
    backgroundClip: 'content-box',
    margin:'auto',
    width: '80%',
    borderRight: '10px solid white',
    borderImage: 'linear-gradient(to top, white 25%, rgba(0,0,0,0) 25%',
    borderImageSlice: 1,
  },
  titleBorderBottom: {
    backgroundClip: 'content-box',
    width: '100%',
    borderBottom: '10px solid white',
    borderImage: 'linear-gradient(to Right, rgba(0,0,0,0) 90%, white 90%, white 100%)',
    borderImageSlice: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
  },
  boxLeft: {
    height: 100,
    float: 'left',
    width: 100,
    borderLeft: '10px solid white',
    borderTop: '10px solid white',
    position: 'relative',
    marginLeft: -30,
    marginTop: -30,
  }
}
