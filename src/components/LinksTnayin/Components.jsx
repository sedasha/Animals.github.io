
import { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import Animals from './Aminals'
import Main from './Main';
import './Style.css'




class Components extends Component {
    state = { 
        mammals:[
            {id: 1, 
                addres: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2398,w_4256,x_0,y_185/f_auto,q_auto,w_1100/v1560272025/shape/mentalfloss/19116-istock-157478834.jpg", 
                desc: "Like every mammal, dolphins are warm blooded. Unlike fish, who breathe through gills, dolphins breathe air using lungs. Dolphins must make frequent trips to the surface of the water to catch a breath. The blowhole on top of a dolphin's head acts as a 'nose', making it easy for the dolphin to surface for air."},
            {id: 2, 
                addres: "https://www.balisafarimarinepark.com/wp-content/uploads/2019/02/What-makes-an-animal-a-Mammal-2-600x400.jpg?p=7785",
                desc: "With the exception of tree kangaroos (genus Dendrolagus), all members of the kangaroo family (Macropodidae) rely on long, powerful hind legs and feet for hopping and leaping, their predominant forms of locomotion. Their long tails, thickened at the base, are used for balancing. This feature is most obvious in the large kangaroos, which use the tail as a third leg when standing still."},
            {id: 3, 
                 addres: "https://images.immediate.co.uk/production/volatile/sites/23/2018/11/GettyImages-998025222-cbe0dc3.jpg?quality=90&resize=620%2C413",
                 desc: "Lions are large carnivorous mammals that belong to the family of felines. The have a tawny coat with a long tufted tail. Male lions have a large mane of darker colored fur surrounding its head and neck. Lions are the only cats that have this obvious difference between the males and the females."},
            {id: 4, 
                addres: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnYX5fMgsiaH1jU2pEnFw5pTuCatLblvi0Q&usqp=CAU",
                desc:"Deer are mammals that belong to the family Cervidae. There are many species in the deer family, including various types of deer, moose, elk (wapiti), caribou, and reindeer. Some deer species are social, but others are solitary."},
            {id: 5, 
                addres: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLXXfAmaMq6znWG4olVqdpEbjcM8TQO4O8A&usqp=CAU",
                desc:"Elephant, (family Elephantidae), largest living land animal, characterized by its long trunk (elongated upper lip and nose), columnar legs, and huge head with temporal glands and wide, flat ears. Elephants are grayish to brown in colour, and their body hair is sparse and coarse."},
            {id: 6, 
                addres: "https://ewscripps.brightspotcdn.com/dims4/default/bd9703e/2147483647/strip/true/crop/640x360+0+0/resize/640x360!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F05%2F19%2FGray_Wolf_Maya_1495247211543_59907796_ver1.0_640_480.jpg",
                desc: "Wolves are territorial and generally establish territories far larger than they require to survive assuring a steady supply of prey. Territory size depends largely on the amount of prey available and the age of the pack's pups. They tend to increase in size in areas with low prey populations,[95] or when the pups reach the age of six months when they have the same nutritional needs as adults."},
            {id: 7, 
                addres: "https://www2.illinois.gov/dnr/outreach/kidsconservation/PublishingImages/Dec2015RedFox.jpg",
                desc: "Red foxes adapt very well to human presence, thriving in areas with farmland and woods, and populations can be found in many large cities and suburbs. Mice, voles, and rabbits, as well as eggs, fruit, and birds, make up most of the diet, but foxes readily eat other available food such as carrion, grain (especially sunflower seeds), garbage, pet food left unattended overnight, and domestic poultry"},
            {id: 8, 
                addres: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNKOcycqCjMAiPU5C-JOceHacb6aLiVExWw&usqp=CAU", 
                desc: " Bears are solitary and quite docile animals that have been given a bad reputation.  They are smart, shy and are great at hiding when they need to.  There is very little information on some bears because researchers have a hard time finding them!"}
        ],
        birds:[
        {id: 1, 
            addres: "https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80", 
            desc: "In general, an eagle is any bird of prey more powerful than a buteo. An eagle may resemble a vulture in build and flight characteristics but has a fully feathered (often crested) head and strong feet equipped with great curved talons. A further difference is in foraging habits: eagles subsist mainly on live prey."},
        {id: 2, 
            addres: "https://images.unsplash.com/photo-1530205015963-513dc8da3f65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            desc: "Blue Jays make a large variety of calls that carry long distances. Most calls produced while the jay is perched within a tree. Usually flies across open areas silently, especially during migration. Stuffs food items in throat pouch to cache elsewhere; when eating, holds a seed or nut in feet and pecks it open."},
        {id: 3, 
            addres: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            desc: "The northern cardinal is a mid-sized songbird with a body length of 21–23 cm (8.3–9.1 in). It has a distinctive crest on the head and a mask on the face which is black in the male and gray in the female. The male is a vibrant red, while the female is a reddish olive color. The northern cardinal is mainly granivorous, but also feeds on insects and fruit."},
        {id: 4, 
            addres: "https://images.unsplash.com/photo-1593069310094-080326c950a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            desc:"The mute swan is one of the heaviest flying birds. In several studies from Great Britain, males (known as cobs) were found to average from about 10.6 to 11.87 kg (23.4 to 26.2 lb), with a weight range of 9.2–14.3 kg (20–32 lb) while the slightly smaller females (known as pens) averaged about 8.5 to 9.67 kg (18.7 to 21.3 lb), with a weight range of 7.6–10.6 kg (17–23 lb)"},
        {id: 5, 
            addres: "https://images.unsplash.com/photo-1600083137733-965233ddc270?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
            desc:"All flamingo species are capable of flying. The flight feathers are easily distinguished in James's flamingos as they are the only black feathers on the bird.[7] To begin flying, they run a few steps and then begin to flap their wings. When they want to land, the opposite process occurs and as they touch down to a surface, they continue to run as they decelerate and stop flapping their wings. Flamingos have been noted to fly up to 37 mph (60 km/h)."},
        {id: 6, 
            addres: "https://images.unsplash.com/photo-1520638023360-6def43369781?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            desc: "Many plants pollinated by hummingbirds produce flowers in shades of red, orange, and bright pink, though the birds will take nectar from flowers of other colors as well. Hummingbirds can see wavelengths into the near-ultraviolet, but hummingbird-pollinated flowers do not reflect these wavelengths as many insect-pollinated flowers do."},
        {id: 7, 
            addres: "https://images.unsplash.com/photo-1577922784120-9802bd2683c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
            desc: "Straw-necked ibises are large birds, around 59–76 cm (23–30 in) long, with a bare black head and a long, downcurved black bill. They have a distinctive, highly iridescent plumage, which can appear fairly uniform dirty dark brown in indifferent light;[2] the wings are dark, with an iridescent, multicoloured sheen in sunlight. They have a shiny blue-black back, with a metallic purple, green and bronze glow, and a dark collar"},
        {id: 8, 
            addres: "https://images.unsplash.com/photo-1586769713674-1dbf6c2a6731?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
            desc: " The black redstart is 13–14.5 cm (5.1–5.7 in) in length and 12–20 g (0.42–0.71 oz) in weight, similar to the common redstart. The adult male is overall dark grey to black on the upperparts and with a black breast; the lower rump and tail are orange-red, with the two central tail feathers dark red-brown."}
        ],
        reptiles:[
            {id: 1, 
                addres: "https://images.unsplash.com/photo-1589652046207-c28dfba4a1b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
                desc: "Crocodilians are more closely related to birds and dinosaurs than to most animals classified as reptiles, the three families being included in the group Archosauria ('ruling reptiles'). Despite their prehistoric look, crocodiles are among the more biologically complex reptiles. Unlike other reptiles, a crocodile has a cerebral cortex and a four-chambered heart. Crocodilians also have the functional equivalent of a diaphragm by incorporating muscles used for aquatic locomotion into respiration"},
            {id: 2, 
                addres: "https://images.unsplash.com/photo-1610105027127-51b989f1e9b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80",
                desc: "Most lizards are quadrupedal, running with a strong side-to-side motion. Others are legless, and have long snake-like bodies. Some such as the forest-dwelling Draco lizards are able to glide. They are often territorial, the males fighting off other males and signalling, often with brightly colours, to attract mates and to intimidate rivals. Lizards are mainly carnivorous, often being sit-and-wait predators; many smaller species eat insects, while the Komodo eats mammals as big as water buffalo."},
            {id: 3, 
                addres: "https://images.unsplash.com/photo-1575119433676-7c4f93720e94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                desc: "Living snakes are found on every continent except Antarctica, and on most smaller land masses; exceptions include some large islands, such as Ireland, Iceland, Greenland, the Hawaiian archipelago, and the islands of New Zealand, and many small islands of the Atlantic and central Pacific oceans."},
            {id: 4, 
                addres: "https://images.unsplash.com/photo-1508455858334-95337ba25607?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
                desc:"Turtles are ectotherms—commonly called cold-blooded—meaning that their internal temperature varies according to the ambient environment. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water. Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water."},
            
        ],
        amphibians:[
            {id: 1, 
                addres: "https://images.unsplash.com/photo-1601812125690-ee407a886659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80", 
                desc: "The common toad can reach about 15 cm (6 in) in length. Females are normally stouter than males and southern specimens tend to be larger than northern ones. The head is broad with a wide mouth below the terminal snout which has two small nostrils. There are no teeth. The bulbous, protruding eyes have yellow or copper coloured irises and horizontal slit-shaped pupils. Just behind the eyes are two bulging regions, the paratoid glands, which are positioned obliquely."},
            {id: 2, 
                addres: "https://images.unsplash.com/photo-1415857301893-713be90c0777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                desc: "Amphibian with a flat tail found mainly in freshwater and usually feeding on insects. The newt's skin, however, is not as smooth as that of other salamanders.[9] The cells at the site of an injury have the ability to undifferentiate, reproduce rapidly, and differentiate again to create a new limb or organ. One hypothesis is that the undifferentiated cells are related to tumor cells, since chemicals that produce tumors in other animals will produce additional limbs in newts."},
            {id: 3, 
                addres: "https://images.unsplash.com/photo-1576171441151-2635a871089a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
                desc: "Most species of salamander have small teeth in both their upper and lower jaws. Unlike frogs, even the larvae of salamanders possess these teeth.[3] Although larval teeth are shaped like pointed cones, the teeth of adults are adapted to enable them to readily grasp prey. The crown, which has two cusps (bicuspid), is attached to a pedicel by collagenous fibers. "},
            {id: 4, 
                addres: "https://images.unsplash.com/photo-1579380661172-0e56f64d7228?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                desc:"Treefrogs are usually tiny as their weight has to be carried by the branches and twigs in their habitats. While some reach 10 cm (4 in) or more, they are typically smaller and more slender than terrestrial frogs. Treefrogs typically have well-developed discs at the finger and toe tips; the fingers and toes themselves, as well as the limbs, tend to be rather small, resulting in a superior grasping ability. "},
        ],
        names: ["Mammals", "Birds", "Reptiles", "Amphibians"]
     
     }
    render() { 
        const {mammals, birds, reptiles, amphibians, names}= this.state
        return ( 
            <div className ="container">
                    <Switch>
                       <Route path="/animals.github.io" exact>
                           <Main />
                       </Route>
                       <Route path= "/animals.github.io/Mammals">
                           <Animals animals={mammals} names= {names[0]}/>
                       </Route>
                       <Route path= "/animals.github.io/Birds">
                           <Animals animals={birds} names= {names[1]}/>
                       </Route>
                       <Route path= "/animals.github.io/Reptiles">
                            <Animals animals={reptiles} names= {names[2]}/>
                       </Route>
                       <Route path= "/animals.github.io/Amphibians">
                            <Animals animals={amphibians} names= {names[3]}/>
                       </Route>

                       
                    </Switch>
            </div>
         );
    }
}
 
export default Components;