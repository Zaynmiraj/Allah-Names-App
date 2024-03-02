import React, {useState} from 'react'
import {View , Text, FlatList,Share, Image, TouchableOpacity} from 'react-native'
import style from './style'
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

export default function English() {
    const[data,setData]=useState([
        {id:"1",en:"Ar-Rahman", means:"The Most Merciful",means2:"The One who has plenty of mercy for the believers"},
        {id:"2",en:"Ar-Rahim", means:"The One who has plenty of mercy for the believers.",means2:"The most Compassionate"},
        {id:"3",en:"Al-Malik", means:"The King, the Monarch",means2:"The One with the complete Dominion, the One Whose Dominion is clear from imperfection."},
        {id:"4",en:"Al-Quddus", means:"The One who is pure from any imperfection and clear from children and adversaries.",means2:"The Holy one"},
        {id:"5",en:"As-Salam", means:"The One who is free from every imperfection.",means2:"The Peace, The Tranquility"},
        {id:"6",en:"Al-Mu'min", means:"The One who witnessed for Himself that no one is God but Him. And He witnessed for His believers that they are truthful in their belief that no one is God but Him.",means2:"The Faithful, The Trusted"},
        {id:"7",en:"Al-Muhaymin", means:"The One who witnesses the saying and deeds of His creatures.",means2:"The vigilant, the controller"},
        {id:"8",en:"Al-Jabbar", means:"The One that nothing happens in His Dominion except that which He willed.",means2:"The all Compelling"},
        {id:"9",en:"Al-Mutakabbir", means:"The Haughty, the Majestic",means2:"The One who is clear from the attributes of the creatures and from resembling them"},
        {id:"10",en:"Al-Khaliq", means:"The One who brings everything from non-existence to existence",means2:"The Creator, the Maker"},
        {id:"11",en:"Al-Bari'", means:"The Creator who has the Power to turn the entities.",means2:"The Artificer, the Creator"},
        {id:"12",en:"Al-Musawwir", means:"The One who forms His creatures in different pictures.",means2:"The Organizer, the Designer"},
        {id:"13",en:"Al-Ghaffar", means:"The One who forgives the sins of His slaves time and time again.",means2:"The Forgiving, the Forgiver"},
        {id:"14",en:"Al-Qahhar", means:"The Subduer who has the perfect Power and is not unable over anything.",means2:"The Almighty, the Dominant"},
        {id:"15",en:"Al-Wahhab", means:"The One who is Generous in giving plenty without any return.",means2:"The Donor, the Bestower"},
        {id:"16",en:"Ar-Razzaq", means:"The Provider",means2:"the Sustainer"},
        {id:"17",en:"Al-Fattah", means:"The One who opens for His slaves the closed worldly and religious matters.",means2:"The Opener, the Reveler"},
        {id:"18",en:"Al-'Alim", means:"The Knowledgeable; The One nothing is absent from His knowledge.",means2:"The all Knowing, the Omniscient"},
        {id:"19",en:"Al-'Aziz", means:"The Defeater who is not defeated.",means2:"The Almighty, the powerful"},
        {id:"20",en:"Al-Qabid", means:"The One who constricts the sustenance.",means2:"The Contractor, The Restrainer, the Recipient."},
        {id:"21",en:"Al-Basit", means:"The One who expands and widens",means2:"The Expander, He who expands"},
        {id:"22",en:"Al-Khafid", means:"The One who lowers whoever He willed by His Destruction.",means2:"The Abaser, the Humbler"},
        {id:"23",en:"Ar-Rafi'", means:"The One who raises whoever He willed by His Endowment.",means2:"The Raiser, the Exalter"},
        {id:"24",en:"Al-Mu'iz", means:"Degrades whoever he willed, hence there is no one to give him esteem.",means2:"The Abaser, the Degrader, the Subduer"},
        {id:"25",en:" As-Sami'", means:"The One who Hears all things that are heard by His Eternal Hearing without an ear, instrument or organ.",means2:"The Hearer, The All hearing, all knowing."},
        {id:"26",en:"Al-Basir", means:"The One who Sees all things that are seen by His Eternal Seeing without a pupil or any other instrument.",means2:"The Seer, The discerning, the All seeing."},
        {id:"27",en:"Al-Hakam", means:"He is the Ruler and His judgment is His Word.",means2:"The arbitrator, the Judge"},
        {id:"28",en:"Al-'Adl", means:"The One who is entitled to do what He does.",means2:"The justice, the equitable."},
        {id:"29",en:"Al-Latif", means:"The Most Gentle, the Gracious.",means2:"The One who is kind"},
        {id:"30",en:"Al-Khabir", means:"The One who knows the truth of things.",means2:"The Sagacious, one is who is aware."},
        {id:"31",en:"Al-Halim", means:"The One who delays the punishment for those who deserve it and then He might forgive them.",means2:"The Gentle. The most patient, the Clement."},
        {id:"32",en:"Al-'Azim", means:"The One deserving the attributes of Exaltment, Glory, Extolment, and Purity from all imperfection.",means2:"The Great, Might"},
        {id:"33",en:"Al-Ghafoor", means:"The One who forgives a lot.",means2:"The Forgiving, the Pardoner."},
        {id:"34",en:"Ash-Shakur", means:"The One who gives a lot of reward for a little obedience.",means2:"The Grateful, the Thankful"},
        {id:"35",en:"Al-'Ali", means:"The One who is clear from the attributes of the creatures.",means2:"The most high, the exalted."},
        {id:"36",en:"Al-Kabir", means:"The One who is greater than everything in status.",means2:"The great, the big."},
        {id:"37",en:"Al-Hafiz", means:"The One who protects whatever and whoever He willed to protect.",means2:"The Guardian, the preserver."},
        {id:"38",en:"Al-Muqit", means:"The One who has the Power.",means2:"The maintainer, The Nourisher"},
        {id:"39",en:"Al-Hasib", means:"The One who gives the satisfaction.",means2:"The noble, The Reckoner"},
        {id:"40",en:"Aj-Jalil", means:"The One who is attributed with greatness of Power and Glory of status.",means2:"The Majestic. The honorable, the exalted."},
        {id:"41",en:"Al-Karim", means:"The One who is clear from abjectness.",means2:"The most generous, the Bountiful."},
        {id:"42",en:"Ar-Raqib", means:"The One that nothing is absent from Him. Hence it's meaning is related to the attribute of Knowledge.",means2:"The Guardian, the watchful."},
        {id:"43",en:" Al-Mujib", means:"The One who answers the one in need if he asks Him and rescues the yearner if he calls upon Him.",means2:"The respondent, one who answers."},
        {id:"44",en:"Al-Wasi'", means:"The Englober. The enricher",means2:"the Omnipresent, the Knowledgeable."},
        {id:"45",en:"Al-Hakim", means:"The One who is correct in His doings.",means2:"The most Wise, the Judicious."},
        {id:"46",en:"Al-Wadud", means:"The Affectionate",means2:"the Loving."},
        {id:"47",en:"Al-Majid", means:"The One who is with perfect Power, High Status, Compassion, Generosity and Kindness.",means2:"The Glorious, the exalted."},
        {id:"48",en:"Al-Ba'ith", means:"The One who resurrects for reward and/or punishment.",means2:"The Resurrector, the Raiser from death."},
        {id:"49",en:"Ash-Shahid", means:"The One who nothing is absent from Him.",means2:"The Witness"},
        {id:"50",en:"Al-Haqq", means:"The One who truly exists.",means2:"The Truth, the Just."},
        {id:"51",en:"Al-Wakil", means:"The One who gives the satisfaction and is relied upon.",means2:"The Guardian, the Trustee"},
        {id:"52",en:"Al-Qawee", means:"The One with the complete Power.",means2:"The powerful, the Almighty, The Strong"},
        {id:"53",en:"Al-Matin", means:"The One with extreme Power which is un-interrupted and He does not get tired.",means2:"The Strong, the Firm"},
        {id:"54",en:"Al-Walee", means:"The Supporter, the Friend,",means2:"the Defender the master."},
        {id:"55",en:"Al-Hamid", means:"The praised One who deserves to be praised.",means2:"The Praiseworthy , the Commendable"},
        {id:"56",en:"Al-Muhsi", means:"The One who the count of things are known to him.",means2:"The Counter"},
        {id:"57",en:"Al-Mubdi'", means:"The One who started the human being. That is, He created him.",means2:"The Beginner, the Creator, The Originator"},
        {id:"58",en:"Al-Mu'eed", means:"The One who brings back the creatures after death.",means2:"The Restorer, the Resurrector."},
        {id:"59",en:"Al-Muhyee", means:"The One who took out a living human from semen that does not have a soul. He gives life by giving the souls back to the worn out bodies on the resurrection day and He makes the hearts alive by the light of knowledge.",means2:"The Bestower, the Life Giver."},
        {id:"60",en:"Al-Hayy", means:"The One attributed with a life that is unlike our life and is not that of a combination of soul, flesh or blood.",means2:"The Living. The Alive, the ever living."},
        {id:"61",en:"Al-Mumeet", means:"The One who renders the living dead.",means2:"Al-Mumeet"},
        {id:"62",en:"Al-Qayyum", means:"The One who remains and does not end.",means2:"The Self-Subsistent, The Eternal, the Self Sustaining."},
        {id:"63",en:"Al-Wajid", means:"The Rich who is never poor. Al-Wajd is Richness.",means2:"The all perceiving, the Opulent, the Finder."},
        {id:"64",en:"Al-Muhit", means:"The Encompassing",means2:"Ocean"},
        {id:"65",en:"As-Samad", means:"The Master who is relied upon in matters and reverted to in ones needs.",means2:"The Perfect, the Eternal."},
        {id:"66",en:"Al-Wahid", means:"The One without a partner.",means2:"The One, the Unique."},
        {id:"67",en:"Al-Qadir", means:"The One attributed with Power.",means2:"The Able, the Capable, the Omnipotent."},
        {id:"68",en:"Al-Muqtadir", means:"The One with the perfect Power that nothing is withheld from Him.",means2:"The Capable, The all Powerful"},
        {id:"69",en:"Al-Muqaddim", means:"He makes ahead what He wills.",means2:"The Presenter, The Advancer, The Expediter"},
        {id:"70",en:"Al-Mu'akhkhir", means:"The One who delays what He wills.",means2:"The Fulfiller, the keeper behind, The Deferrer"},
        {id:"71",en:"Al-'Awwal", means:"The One whose Existence is without a beginning.",means2:"The First"},
        {id:"72",en:"Al-'Akhir", means:"The One whose Existence is without an end.",means2:"The Last"},
        {id:"73",en:"Az-Zahir", means:"The Apparent, the Exterior, The Manifest",means2:"The One that nothing is above Him and nothing is underneath Him, hence He exists without a place."},
        {id:"74",en:"Al-Batin", means:"The Hidden, the Interior, ",means2:" the Latent"},
        {id:"75",en:"Al-Wali", means:"The One who owns things and manages them.",means2:"The Governor, The Ruler, The Master"},
        {id:"76",en:"Al-Muta'ali", means:" The One who is clear from the attributes of the creation.",means2:"The Exalted, The most high, one above reproach."},
        {id:"77",en:"Al-Barr", means:"The One who is kind to His creatures, who covered them with His sustenance and specified whoever He willed among them by His support, protection, and special mercy.",means2:"The Benefactor, The Beneficent, the Pious."},
        {id:"78",en:"At-Tawwab", means:"The One who grants repentance to whoever He willed among His creatures and accepts his repentance.",means2:"The Acceptor of Repentance, The Forgiver, the Relenting."},
        {id:"79",en:" Al-Muntaqim", means:"The One who victoriously prevails over His enemies and punishes them for their sins. ",means2:"The One who victoriously prevails over His enemies and punishes them for their sins. "},
        {id:"80",en:"Al-'Afuww", means:"The One with wide forgiveness.",means2:"The Forgiver, the effacer, the Pardoner"},
        {id:"81",en:"Ar-Ra'uf", means:"The One with extreme Mercy. The Mercy of Allah is His will to endow upon whoever He willed among His creatures.",means2:"The merciful, the Ever Indulgent."},
        {id:"82",en:"Malik Al-Mulk", means:"The One who controls the Dominion and gives dominion to whoever He willed.",means2:"The Ruler of the Kingdom, king of the Universe"},
        {id:"83",en:"Zul-l-Jalal wal-Ikram", means:"The One who deserves to be Exalted and not denied.",means2:"Lord of Majesty and Generosity"},
        {id:"84",en:"Al-Muqsit", means:"The One who is Just in His judgment.",means2:"The Just, the Equitable"},
        {id:"85",en:"Aj-Jami'", means:"The One who gathers the creatures on a day that there is no doubt about, that is the Day of Judgment.",means2:"The Collector, the comprehensive, Gather"},
        {id:"86",en:"Al-Ghanee", means:"The One who does not need the creation",means2:"The rich, the all sufficing, Self-Sufficient"},
        {id:"87",en:"Al-Mughnee", means:"The One who satisfies the necessities of the creatures.",means2:"The Enricher, sufficer, the bestower."},
        {id:"88",en:"Al-Mani'", means:"The Supporter who protects and gives victory to His pious believers. Al-Mu'tiy",means2:"The Preventer, the prohibiter, the defender."},
        {id:"89",en:"Ad-Darr", means:"The Distresser , The afflictor, the bringer of Adversity.",means2:"The One who makes harm reach to whoever He willed."},
        {id:"90",en:"An-Nafi'", means:"The One who gives benefits to whoever He wills.",means2:"The Beneficial Benefactor"},
        {id:"91",en:"An-Nur", means:"The One who guides.",means2:" The Light"},
        {id:"92",en:"Al-Hadi", means:"The One whom with His Guidance His believers were guided, and with His Guidance the living beings have been guided to what is beneficial or them and protected from what is harmful to them.",means2:"The Guide"},
        {id:"93",en:"Al-Badi'", means:"The One who created the creation and formed it without any preceding example.",means2:"The Wonderful, the maker, Incomparable"},
        {id:"94",en:"Al-Baqi", means:"The One that the state of non-existence is impossible for Him.",means2:" The Enduring, the Everlasting, the eternal"},
        {id:"95",en:"Al-Warith", means:"The One whose Existence remains.",means2:"The Inheritor, The Heir"},
        {id:"96",en:"Ar-Rashid", means:"The One who guides.",means2:"The Rightly Guided, The Conscious, the Guide"},
        {id:"97",en:"As-Sabur", means:"The One who does not quickly punish the sinners.",means2:"The most Patient, the Enduring."},
       
    ])
    return (
        <View> 
        <FlatList 
        data={data} 
        renderItem={({item})=> 
        
        <TouchableOpacity onPress={() =>{
            Clipboard.setString(item.en +" "+ item.means +" "+ item.means2)
            Snackbar.show({
                text: 'Copied Succesfully',
                duration: Snackbar.LENGTH_SHORT,
                action: {
                  text: 'UNDO',
                  textColor: 'green',
                  onPress: () => { /* Do something. */ },
                },
              });
        }}>
            <View style={style.box}>
            <Text style={style.name}> {item.en} </Text>
            <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}> 
            <View style={{width:'70%'}}>
            <Text> _{item.means} </Text>
            <Text> _{item.means2} </Text>
            </View>
            <View style={{display:'flex', flexDirection:'row'}}> 
                <TouchableOpacity onPress={() => {
                    Tts.speak(item.en + item.means + item.means2, {
                        androidParams: {
                          KEY_PARAM_PAN: -1,
                          KEY_PARAM_VOLUME: 1,
                          KEY_PARAM_STREAM: 'STREAM_MUSIC',
                        },
                      });
                      Tts.setDefaultLanguage('en-US');
                      Tts.setDefaultRate(0.4);
                }} style={{width:20, height:20}}><Image style={{width:25,height:25}} source={require('./photo/mic.png')}   /></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    const result = Share.share({
                        message:item.en +" "+ item.means +" "+ item.means2
                    })
                    if(result=== Share.sharedAction){
  
                    }
                    else if(result === Share.dismissedAction){
  
                    }else{
  
                    }
  
                }} style={{width:20, height:20, marginHorizontal:10}}><Image style={{width:25,height:25}} source={require('./photo/send.png')}   /></TouchableOpacity>
            </View>
            </View>
            
         </View> 
        </TouchableOpacity>  
            
            }
  
            keyExtractor={item => item.id} 
  />
    </View>
    )
}
