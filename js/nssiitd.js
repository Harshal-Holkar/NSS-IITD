var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'ngRoute', 'ngMessages', 'ngSanitize', 'angular-carousel']);
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
            'default': '400',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        })
        .accentPalette('orange');
});



// routes for the urls
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        controller: "MainCtrl",
        templateUrl: "templates/home.html"
    }).when("/about_nss", {
        controller: "MainCtrl",
        templateUrl: "templates/about.nss.html"
        // }).when("/pending_hours", {
        //   controller: "MainCtrl",
        //   templateUrl: "templates/table.html"
    }).when("/book", {
        controller: "MainCtrl",
        templateUrl: "templates/table.html"
    }).when("/about_domains", {
        controller: "MainCtrl",
        templateUrl: "templates/about.domains.html"
    }).when("/about_collabs", {
        controller: "CollabCtrl",
        templateUrl: "templates/about.collabs.html"
    }).when("/about_collabs_apply", {
        controller: "CollabCtrl",
        templateUrl: "templates/about.collabs.apply.html"
    }).when("/faq", {
        controller: "MainCtrl",
        templateUrl: "templates/about.faq.html"
    }).when("/gallery", {
        controller: "MainCtrl",
        templateUrl: "templates/gallery.html"
    }).when("/internship", {
        controller: "MainCtrl",
        templateUrl: "templates/internship.html"
    }).when("/involve_internship", {
        controller: "ProjCtrl",
        templateUrl: "templates/involve.internship.html"
    }).when("/domains", {
        controller: "ProjCtrl",
        templateUrl: "templates/Domains.html"
    }).when("/involve_kaizen", {
        controller: "MainCtrl",
        templateUrl: "templates/involve.kaizen.html"
    }).when("/involve_events", {
        controller: "MainCtrl",
        templateUrl: "templates/involve.events.html"
    }).when("/involve_volunteering", {
        controller: "ProjCtrl",
        templateUrl: "templates/involve.volunteering.html"
    }).when("/download_magazine", {
        controller: "MainCtrl",
        templateUrl: "templates/download.magazine.html"
    }).when("/insight1718", {
        controller: "MainCtrl",
        templateUrl: "templates/mag1718.html"
    }).when("/download_app", {
        controller: "MainCtrl",
        templateUrl: "templates/download.app.html"
    }).when("/download_report", {
        controller: "MainCtrl",
        templateUrl: "templates/download.report.html"
    }).when("/pending_hours", {
        controller: "MainCtrl",
        templateUrl: "templates/hours.pending.html"
    }).when("/hours_complaint", {
        controller: "MainCtrl",
        templateUrl: "templates/hours.complaint.html"
    }).when("/hours_policy", {
        controller: "MainCtrl",
        templateUrl: "templates/hours.policy.html"
    }).when("/team_current", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.2122.html"
    }).when("/team_1920", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.1920.html"
    }).when("/team_2021", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.2021.html"
    }).when("/team_2122", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.2122.html"
    }).when("/team_1819", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.1819.html"
    }).when("/team_1718", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.1718.html"
    }).when("/team_1617", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.1617.html"
    }).when("/check_hours", {
        controller: "TeamCtrl",
        templateUrl: "templates/check_hours.html"
    }).when("/home_trial", {
        controller: "MainCtrl",
        templateUrl: "templates/hometrial.html"
    }).when("/home_trial2", {
        controller: "MainCtrl",
        templateUrl: "templates/hometrial2.html"
    }).when("/team_1516", {
        controller: "TeamCtrl",
        templateUrl: "templates/team.1516.html"
    }).when("/events", {
        controller: "TeamCtrl",
        templateUrl: "templates/events.html"
    }).when("/awards", {
        controller: "ProjCtrl",
        templateUrl: "templates/Awards.html"
    }).otherwise({
        controller: "MainCtrl",
        templateUrl: "templates/error.html"
    });
}]);

app.controller('CollabCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {

    $scope.expandDetail = function(ngo, ev) {
        $mdDialog.show({
                controller: function($mdDialog) {
                    var vm = this;
                    vm.info = {};
                    vm.info = ngo; //your task object from the ng-repeat

                    $scope.hide = function() {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };
                },
                controllerAs: 'infomodal',
                templateUrl: 'templates/about.collabs.details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {

            }, function() {

            });
    };

    // NGO collaboration list starts from here
    $scope.collabrationNGOs = [{
            "image": "neem.jpg",
            "description": "In the words of Mahatma Gandhi, \u201cLiterary Education is of no value if it is not able to build up a sound character.\u201d Keeping the above thought in mind, The Neem School Project was initiated by NSS IITD in collaboration with the White Swan Foundation to ensure quality value education in slum children. We, as a part of the Neem school, visit slums near IITD and try to inculcate the values of honesty, integrity, kindness, helping- nature, cleanliness, hygiene and a lot more through fun filled activities like painting, story-telling, games, etc. The NSS volunteers, called the Value Initiators, interact with the Value Multipliers, i.e. children in age group of 6-14 years and aim at developing good moral character and conduct in the children.",
            "link": "http://nss.iitd.ac.in/links/NEEM_School",
            "name": "Neem School",
            "location": "Katwaria Sarai"
        },
        {
            "image": "vidya.jpg",
            "description": "To the world you may be just a teacher, but to your students you are a HERO.\nThe foundation of every nation is the education of its youth. Believing in this core value, our prime focus at VIDYA is to teach students from classes 4th to 10th and inculcate the fundamental concepts of all subjects, especially Mathematics and Science. Teaching is a wonderful activity, not only the students learn but we, as their tutor and guide, learn a lot too. Volunteers of our teaching projects have demonstrated to have a lot of fun while teaching the kids. We follow a simple and flexible technique of teaching with adoption of interactive learning methodologies, focused on activity based teaching and learning experience. Our contribution includes helping the kids with their regular homework and providing remedial sessions for their doubts and conceptual understanding of the subject. We do believe in 'all work and no play makes jack a dull boy'. Abiding by this, an equal importance is also given to co-curricular activities which not only freshen up minds of the students but also help them develop inter-personal skills. In order to achieve targets and ensure a good learning exercise, our volunteers go to Kendriya Vidyalaya, near Kailash hostel on all weekdays from 3-5 pm. Volunteers are expected to be regular and enjoying the task they have taken up. And as NSS, we try to provide you the atmosphere to help you develop the memorable experience.",
            "link": "http://nss.iitd.ac.in/links/VIDYA_Teaching",
            "name": "VIDYA Teaching Project",
            "location": "Kendriya Vidyalaya, IITD"
        },
        {
            "image": "ApnaParivaar.jpg",
            "description": "A stable and nurturing childhood is essential for a healthy physio- emotional and spiritual development of a human being. Aiming this in children's home project we try to give kids various exposure to different things, inculcate thinking skills in them, provide them creative environment for studies through various activities. \"An investment in knowledge pays the best dividends\". Other than studies our focus is to develop their personality and improve their interpersonal skills. In this project 4 volunteers visit Apna parivaar children's home on every sunday from 12:30 to 5:30 in Mandigaon (near Chhatarpur). For keeping the regular track on kids volunteers have to be regular and passionate for the work.",
            "link": "http://nss.iitd.ac.in/links/Apna_Parivaar_Children_Home",
            "name": "Apna Parivaar Children Home",
            "location": "Mandi Village (Near Chhatarpur)"
        },
        {
            "image": "",
            "description": "With its aim to provide quality education and inculcate learning habits in students pursuing Engineering Entrances who neither can afford nor have access to these values in current society., we teach Board  as well as JEE level material consisting of Physics, Chemistry and Mathematics to students of Class11,12 and 12 Droppers. From the volunteer point of view, it is aimed at developing skills like teaching which requires a lot of patience and communication abilities.",
            "link": "",
            "name": "Aarohan",
            "location": "Blocks,HauzKhas,IITD"
        },
        {
            "image": "Substanceabuse.png",
            "description": "\u201cAn over-indulgence of anything, even something as pure as water, can intoxicate.\u201d Thankfully water is not addictive, but alcohols, drugs and cigarettes are. Under this project we try to eradicate this problem of abuse in our IIT campus. Two domains in which we work include 1. Making the new-comers aware of the problem. 2. Recovery of the people indulged in this abusing.",
            "link": "",
            "name": "Substance abuse project",
            "location": "IIT Delhi"
        },
        {
            "image": "",
            "description": "Supporting the Swachh Bharat Abhiyan, this project aims at conducting drives to clean that place and thus sensitize students as well to not litter public places.",
            "link": "",
            "name": "Cleanliness Drive",
            "location": "IIT Delhi"
        },
        {
            "image": "",
            "description": "The project aims to segregate recyclable paper from normal waste in the institute. It also aims at sensitising the community about the wastage of paper.",
            "link": "",
            "name": "Waste Paper Recycling Initiative",
            "location": "IIT Delhi"
        },
        {
            "image": "nab.png",
            "description": "As truly said that, \"Hope is being able to see that there is light despite of the all darkness.\" Believing in the same this project works for the upliftment of the blind girls. There is a well-known saying that, teacher can change life with just the right mix of chalk and challenges. Our main focus here is to educate them so that the can stand on their own feet. There are girls from different classes. We teach them different subjects English, maths, computer, etc. Not only this much they also learn handicraft, spa and other courses also. They make many beautiful things on their own and those things are sold.",
            "link": "",
            "name": "NAB ",
            "location": "NAB hauz khas, NAB RK Puram "
        },
        {
            "image": "",
            "description": "The SIC is most appropriately a blend of the two terms that we all relate to, NSS and IITD. We, at the Social Innovation Cell aim to utilize the available technology and design new techniques to target problems faced by the society and for conservation of resources. We try to achieve this aim by motivating and training the IITD student population to innovate for the societal well-being.",
            "link": "",
            "name": "SIC",
            "location": "IIT Delhi"
        },
        {
            "image": "",
            "description": "The munirka project aims for the upliftment of the slum community by making it self-reliant in various spheres.  We believe that the future of the community is in the hands of the children of the community. Hence, our prime focus is on the overall character development of the kids mainly through education. We provide help to the kids of Munirka slums not just by teaching them but to instil in them love for education so that they may excel in their future endeavours. This is done by interactive teaching and by conducting various fun activities. Extra-curricular activities are also organised to ensure that each kid has a multifaceted personality. Other than that we try to inculcate moral values in them. NSS volunteers are required to go to Munirka Basti from Jwala circle and teach kids various subjects. Volunteers are also needed to design content for teaching and plan activities.",
            "link": "",
            "name": "Munirka Teaching Project",
            "location": "Munirka Basti (Near RK Puram) "
        },
        {
            "image": "",
            "description": "In collaboration with lakshyam NGO we work to develop Sindhi basti as a model basti in which we can get a glimpse of future INDIA. We talk to people there and make them aware about various issues concerning them like cleanliness, sanitation etc. As Children are the future of any community thus we also interact with children and teach them moral values so that they can avoid involvement in illegal activities. Our main purpose is to make people broad minded and also in this process volunteers get an exposure of a very backward slum.",
            "link": "",
            "name": "Lakshyam Community Development",
            "location": "Sindhi Basti, Vasant Kunj, E-2"
        },
        {
            "image": "DNip.png",
            "description": "DNip-Care (www.dnipcare.org) is an NGO dedicated to improving the quality of life of long-term, terminally ill, bedridden patients, mostly cancer patients. Our volunteers generally go every weekend to visit these patients at their homes; or in a hospital, and try to spend some time with them as their well-wishers/ friends. Our strategy is to-1.Offer emotional support; 2.Establish a network of volunteers, nurses and doctors with expertise in palliative care to support such initiatives; 3.Facilitate the development of locally sustainable home care programs; All this with the active support of our esteemed volunteers and well-wishers.",
            "link": "",
            "name": "Dnip Care",
            "location": "Dharamshala of Delhi Cancer Institute, Dilshad Garden"
        },
        {
            "image": "AC.png",
            "description": "Under this project, we try to analyse the behaviour of people towards animals and of animals towards us. As the name suggests, we try to motivate people to care for the animals. The animals are equally important to earth and deserve the same amount of love as we do. This project also aims at making people realise the pain or suffering they intentionally or unintentionally give to the nature primarily animals. We facilitate interactions in and out of campus, tell people how to deal with animals and provide a platform for enthusiasts to do their bit. With this we create a coexistence.",
            "link": "",
            "name": "Animal Care",
            "location": ""
        },
        {
            "image": "internship.png",
            "description": "Where volunteering is a platform for you to contribute selflessly, Internships are chosen to gain some ground exposure, qualities and experience. There are different types of internships under NSS, within our projects and with the NGOs. Internships with NGOs are a platform for volunteers to expand their experience beyond the domain of NSS IITD, in different parts of country.",
            "link": "",
            "name": "Internships",
            "location": "All acoss India"
        },
        {
            "image": "CLimateCrusade",
            "description": "Climate Crusade is an initiative taken by NSS IIT Delhi to tackle the growing concern over Climate Change which is quite a \"hot\" topic nowadays.\nWe need to realise that the average temperature of the earth has been rising continuously from the years of industrial revolution. Although the rise in temperature is normal but the rate of rise of temperature which is quite alarming is not normal. This leads us to debatable topic of Climate Change. Some say that the climate is actually changing some say it is not.\nMost of our activities would be research based. We will be conducting various studies and surveys and try to analyse them on the institute or city level and make fruitful conclusions. However, our main focus would be - To make everyone aware of this issue so that they are able to classify it accordingly in the shades of grey.",
            "link": "",
            "name": "Climate Crusade",
            "location": "IIT Delhi"
        },
        {
            "image": "",
            "description": "Toy from Trash or TFT is an initiative of NSS IITD to create a interest among the kids in the field of science and engineering. Our main targets are those kids who are deprived of proper environment where they can develop their interest. As the name suggest the volunteers make some scientific toys from useless or easily available materials. They then demonstrate these in munirka village or apna parivar.",
            "link": "",
            "name": "Toy from trash",
            "location": "Munirka and apna parivar"
        },
        {
            "image": "",
            "description": "Through this project we try to analyse and show people that certain stereotypes and notions about gender and sex are questionable and need to be rectified. We initiate discussions on topics like equality, stereotypes, discrimination based on gender etc., among people, to make them realise the need  and bring out quality solutions.",
            "link": "",
            "name": "Gender Mainstreaming",
            "location": "IIT Delhi"
        },
        {
            "image": "foodforthought.png",
            "description": "This project of NSS IITD is run in collaboration with Food4Thought Organization with a purpose to connect idle books to hungry minds, restore endangered books & stories, reignite the joy of reading and build school & community libraries. With this we aim to bring a reading revolution. Books can spread knowledge, change lives and  bring revolutions. Books are the link which connects ages and makes  humanity flow. We help  children in reading books. We make sure that they have exposure to books other than just coursebooks. We ask people and  institutions to donate used books and provide those books to the needy.",
            "link": "",
            "name": "Food4Thought",
            "location": "Delhi"
        },
        {
            "image": "5thspace.jpg",
            "description": "Bound by the 4 spaces of family, friends, work and leisure, we aim to create a fifth space which is a space  to \u201chang out\u201d, meet others, share opinions and views and take action; to think beyond, learn, do and be more. A platform which will make the other 4 count. The project would be full of activities, discussions and YOU, the YOUth.",
            "link": "",
            "name": "5th Space",
            "location": "IIT Delhi"
        },
        {
            "image": "",
            "description": "\"Earth provides enough to satisfy every man's needs, but not anyone's greed\" as said by Mahatma Gandhi. Our project team members, commonly referred as the \"Green Warriors\" work on sensitizing the commoners about environment conservation, presenting them solutions to their day-to-day wastage, and connecting them to nature. It is well-known for our every problem, there are experts to counter them, the need is just to ask for a solution. We help in making a platform, such that people ask for such questions, related to their daily effects on nature's degradation, because questioning your actions is really important.",
            "link": "",
            "name": "Green warrior",
            "location": "IIT Delhi"
        },
        {
            "image": "Old.png",
            "description": "As the saying goes,\"In youth the days are short and the years are long, in old age the years are short and day's long\", the primary aim of oldage home project is to provide mental support to the old people, in a way such that the volunteers also learn something from it.Currently we are aiming at forming a connection between old age homes and orphanages because both can prove to be strong support to each other. We also want to convert it into a sustainable model. The volunteers, old age home and orphanage residents are the primary stakeholders. We do regular visits to oldage homes, in addition to making combined visits with children from orphanage or homes(currently umeed home). In this way we try to establish a permanent connection between them so that in future whenever they feel like, they should be able to visit each other.",
            "link": "",
            "name": "Old age home",
            "location": ""
        },

        {
            "image": "",
            "description": "The campaign was set up with the vision that we will do our best to bring the ugly reality of human trafficking in front of general public with the ultimate aim that no person man, woman or child, be sold, purchased, violated or be subject to any form of exploitation. Various events to sensitize IITD community against this evil are conducted regularly. ",
            "link": "",
            "name": "Anti-Human Trafficking Project",
            "location": "IIT Delhi, Kat-katha NGO"
        },
        {
            "image": "",
            "description": "Under this project, we try to teach some extra activities which some people can't afford to learn despite of having interest and talent. In this way, they get to learn something and also they gain confidence which is very crucial for them. Through teaching them music or dance, the volunteers also get to improve themselves in various aspects, in this way both the sides get to develop.",
            "link": "",
            "name": "Extra Currics",
            "location": ""
        },
        {
            "image": "",
            "description": "The project aims to aware the people about the Right To Education act and if they are eligible to get benefitted from this then we also help them to fill the online form.",
            "link": "",
            "name": "RTE",
            "location": "Munirka Basti (Near RK Puram) "
        },
        {
            "image": "collectiondrive.jpg",
            "description": "Collection drives aim to collect materials no longer in use and deliver them to people who cannot afford them. We collect clothes, utensils, booka and medicines from hostels and residential areas. These, after sorting, are sent to an NGO named Goonj, which provides them to the needy ones",
            "link": "http://nss.iitd.ac.in/links/Collection_Drive",
            "name": "Collection Drives",
            "location": "IIT Delhi"
        },
        {
            "image": "roadsafety.JPG",
            "description": "With the aim of making indian road safer, NSS IIT Delhi started its road safety project. To achieve this aim we conduct \u00a0lecture cum discussion session on Road Safety, workshops for first hand experience, field visits and also two types of internships,i.e, policy and technical. An annual competition, WATCH THE ROAD, is held from last 2 years at TRYST wherein participants from various colleges across the country work on a Road Safety Problem and try to implement feasible solutions for the same.\nThrough Watch the road we try to channelize youth's energy to bring a policy or infrastructural change to reduce road accidents. We want to make Indian road safer by not just spreading awareness but also coming up with technological and innovative solutions to existing problems related to road safety.",
            "link": "",
            "name": "Road Safety project",
            "location": "IIT Campus and ouside IIT too"
        }
    ];
});

app.controller('ProjCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {
    $scope.expandDetail = function(member, ev) {
        $mdDialog.show({
                controller: function($mdDialog) {
                    var vm = this;
                    vm.member = {};
                    vm.member = member; //your task object from the ng-repeat

                    $scope.hide = function() {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };
                },
                controllerAs: 'infomodal',
                templateUrl: 'templates/project.details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {

            }, function() {

            });
    };

    $scope.projects =

        [

            {
                "image": "Mental health (png).png",
                "proj_img": "https://lh6.googleusercontent.com/WWY3vzVZjrm8IyUHgSF41wRNcv_8MbXdudwWyiMSOKgGw8_HBIAzNIZDXaFXNfmp66M6yhadz6MYttldozZESMjlzIeZqXwWISiFPs9fIoZIHhmxfs9J3UJ_PfW6891Gv4SRRM8p",
                "description": "We try to help out people who are suffering from mental health issues, try to promote the fact that it is totally okay to feel disturbed at times, and reaching out for help is a sign of strength and there is nothing shameful about that. Recently we started an initiative “Care packages” in which we compiled prose, poetry, songs, in the form of letters with a reach out section to bridge the gap between those who are suffering, and counselling services. We also conduct webinars for the same cause",
                "link": "",
                "name": "Mental Health",
                "location": "",
                "address": "HE3",
            },
            {
                "image": "Ankuram.jpg",
                "proj_img": "",
                "description": "Adult education, distinct from child education, is a practice in which adults engage in systematic and sustained self-educating activities in order to gain new forms of knowledge, skills, attitudes, or values. By implementing adult literacy programmes, this project intends to improve an individual's quality of life and enable him or her to realise his or her potential for self-realisation and elevate their level of living. The curriculum includes courses such as Speaking English, Computer and Technology, Gender Awareness, and others.",
                "link": "",
                "name": "Ankuram",
                "location": "",
                "address": "ED2",
            },
            {
                "image": "Pahari Pathshala.jpg",
                "proj_img": "",
                "description": "In this project, our main aim is to help students of Pahari village in Haryana. Volunteers teach Science & Maths to students of classes 11th - 12th for board examinations as well as competitive exams like JEE Mains & Advanced. Regular tests are also conducted at the end of each topic to check the understanding and learning of the students.",
                "link": "",
                "name": "Pahari Pathshala",
                "location": "",
                "address": "ED4",
            },
            {
                "image": "UNNATI.jpg",
                "proj_img": "",
                "description": "Unnati is an initiative which aims at providing quality education of the subjects Physics, Chemistry, and Mathematics to students of classes IX-X. We are currently in collaboration with Saraswati Seva Foundation, VIDYA NGO, as well as Edjustice NGO. We have already concluded a successful collaboration with the Udayan Care NGO as well, in which volunteers helped the students with their academics. We hope to continue helping our students enhance their knowledge, put them on the right path for their future and help them achieve new heights.",
                "link": "",
                "name": "Unnati",
                "location": "",
                "address": "ED6",
            },
            {
                "image": "VIAAN.png",
                "proj_img": "",
                "description": "We aim to work towards the overall growth and development of underprivileged children. We try to inculcate moral education into these children as well as conduct extra-curricular activities for them. We are currently collaborating with Jan Sharnam NGO and Edjustice Foundation. We also regularly hold fun sessions with children of other NSS Teaching projects like VIDYA to bring together fun and learning through the means of storytelling, art and craft, music, drama and more!",
                "link": "",
                "name": "Viaan",
                "location": "",
                "address": "ED7",
            },
            {
                "image": "Blood Donation.jpg",
                "proj_img": "https://lh6.googleusercontent.com/fUcP0LCUgE1E11uxsa8rJZmZit84_NKFm-xxE1tTHFrCzoYCLTxecBSMTbC7nWSgtq_AFTsIPCdgmZjWufmRB7qreklyI7XxRjlZ2N24TLZaizJmezWr0j9AGeIp1vnuZtQHvqKh",
                "description": "This project aims to help people in need of blood to approach blood donors and also spreading awareness towards the need for blood donation, especially by the youth. We manage a database to keep a record of requests and past donors. We have also collaborated with BloodConnect NGO to organise camps and meet blood requirements.",
                "link": "",
                "name": "Blood Donation",
                "location": "",
                "address": "HE1",
            },
            {
                "image": "An.png",
                "proj_img": "",
                "description": "",
                "link": "",
                "name": "",
                "location": "",
                "address": "",
            },
            {
                "image": "An.png",
                "proj_img": "",
                "description": "",
                "link": "",
                "name": "",
                "location": "",
                "address": "",
            },
            {
                "image": "Blog_logo-removebg-preview.png",
                "proj_img": "https://lh3.googleusercontent.com/iXX3F2iOeS3XBQeAXCWbuWyT7LTKo51O5NMzNZgTnQR6zmenBl7PQiUp2FkfdKVpujZGLm2U6z9dYD8nm6Q12AQwAYBqHfH9OvozUfYSsKhgEENOdwdr7PEHMWsEfBXg_WCxUbSM",
                "description": "The project deals with content related to issues from society, environment, and various issues to raise awareness and make people get the right information about the problem.",
                "link": "",
                "name": "Blog",
                "location": "",
                "address": "SE1",
            },

            {
                "image": "She codes .jpg",
                "proj_img": "https://lh6.googleusercontent.com/Dde1hDNeEtTG6se55wh_NFcRzEq38IDdPlfaDLdNAiMl0GAnr5YDRDVvUYpS166Jn8GWbxx9KZ9LcVpMxGwOH03tKsRfWkMtgFxhlRPR84AVB0s-pXEX-Xf0pzbOvOvnAQvoOmVW",
                "description": "In this Project we try to motivate girl students of 7th-8th class to take up the technology field and teach coding to those girls.and give them an idea about general coding and platforms like Scratch and Python. This project is being done in collaboration with the She Codes foundation and Delhi govt. This project combines the Education and Technology field and tries to bring it to the students.",
                "link": "",
                "name": "She Codes",
                "location": "",
                "address": "ED5",
            },
            //   {
            //     "image": "UC.png",
            // "proj_img":"",
            // "description": "Udayan is a Sanskrit word meaning 'Eternal Sunrise'. Udayan Care aims to bring sunshine into the lives of underserved sections of society that require intervention. In this project, we have collaborated with the Udayan Care NGO to teach underprivileged kids associated with their NGO. Volunteers are also involved with the creation of resources like assignments, tests, etc. The children have access to the internet, and the volunteers take classes online. In resource creation, the volunteers are in charge of making assignments, tests and designing a curriculum for the students to ensure efficient and good quality teaching. ",
            // "link": "",
            // "name": "Udayan Care",
            // "location": "",
            // "address": "UC",
            //   },
            {
                "image": "CovidCare.jpeg",
                "proj_img": "",
                "description": "The coronavirus has affected millions of people around the world. This project is to tackle the main challenges associated with the pandemic and ideate as well execute steps to deal with it. We work to spread awareness about vaccination and taking precautions to prevent future resurgence in the number of cases. ",
                "link": "",
                "name": "Covid Care",
                "location": "",
                "address": "HE2",
            },
            {
                "image": "E-Novate.jpg",
                "proj_img": "",
                "description": "On a mission to tackle and combat various environmental issues related to scarcity and contamination of water resources, E-Novate strives to use innovation to change people's perspectives about their roles in protecting the environment.",
                "link": "",
                "name": "E-Novate",
                "location": "",
                "address": "EN3",
            },



            {
                "image": "neem.png",
                "proj_img": "proj_pics/neem.jpg",
                "description": "In the words of Mahatma Gandhi, �Literary Education is of no value if it is not able to build up a sound character.� Keeping the above thought in mind, The Neem School Project was initiated by NSS IIT Delhi in collaboration with the White Swan Foundation to ensure quality value education in slum children. We, as a part of the Neem school, visit slums near IIT Delhi and try to inculcate the values of honesty, integrity, kindness, helping- nature, cleanliness, hygiene and a lot more through fun filled activities like painting, story-telling, games, etc. The NSS volunteers, called the Value Initiators, interact with the Value Multipliers, i.e. children in age group of 6-14 years and aim at developing good moral character and conduct in the children.",
                "link": "http://nss.iitd.ac.in/links/NEEM_School",
                "name": "Neem School",
                "location": "Katwaria Sarai",
                "address": "NeemSchool",
            },

            {
                "image": "science seeds.jpg",
                "proj_img": "https://lh6.googleusercontent.com/oa38zoTqM8b5sNArbFCUSgcmp7L0vHmoxRCKHgP4jiYFpNOi0mtTrUqEOAoPA4JxpE60yvEzn4Pj-oskRi9I61CdFra80HLit_3p4OfFYyayTloxVeYcHh8ouzksAF5QYvaYJSzP",
                "description": "We in Science Seeds try to develop practical science knowledge for the children who live nearby IIT Delhi and those belonging to our other NSS projects by demonstrating science projects, models and conducting workshops for them.",
                "link": "http://nss.iitd.ac.in/links/NEEM_School",
                "name": "Science Seeds",
                "location": "IIT Delhi",
                "address": "IN1",
            },

            //   {"image": "Bachpan.png", 
            // "proj_img":"proj_pics/Bachpan.jpg",
            //   "description": "The future of a nation lies in its youth. But in our nation, a huge chunk of youth do not get the chance to build their own future, let alone the country's. Children, when they should be studying and playing can be seen on the streets begging, on constructiom sites working. We aim to provide such children education, better living conditions and develop them as individuals so they can be an asset to the nation, starting from the children of the labourers inside our own campus who do not have a proper place to sleep, a place to study or a chance to grow.",
            //   "link": "",
            //   "name": "Bachpan",
            //   "location": "",
            //   "address": "Bachpan",
            //    },

            //   {"image": "ScienceSpeaks.png",
            // "proj_img":"proj_pics/ScienceSpeaks.jpg", 
            //  "description": "The aim of this initiative is to provide a platform for bringing the researchers involved in high end research happening in the labs at IIT Delhi to the students of 9th-12th grade, to pique their interest towards science and innovation, and provide them a chance to interact with the faculty of IIT Delhi.",
            //  "link": "",
            //  "name": "Science Speaks",
            //  "location": "IIT Delhi",
            //  "address": "ScienceSpeaks",
            //   },

            {
                "image": "NatureLovers.jpeg",
                "proj_img": "https://lh6.googleusercontent.com/3lVVMVYepdr_-zLd--RpRGdTDENIHy1eiz74Dgit-vh6dAVmCRo2eJty4YWCs_2INRDPjTvedf_ONTU-VkPlwIkO2Y1oQtS5Lr1jDSCuDDF7Sv9An2Jx-NxMHt1nFxS7YguDwCMa",
                "description": "The project aims to develop an interest among students in activities that will positively impact the environment. The project also seeks to sensitise students about the negative impact on the environment due to plastic bags, plastic straws, wastage of electricity, etc.  We organise activities to encourage students to plant trees, reuse/recycle/reduce the waste, and sensitise them towards different environmental issues. We conduct initiatives to encourage people to make choices and changes that would impact the environment positively.",
                "link": "http://nss.iitd.ac.in/links/NEEM_School",
                "name": "Nature Lovers",
                "location": "IIT Delhi",
                "address": "EN5",
            },


            {
                "image": "sic.jpg",
                "proj_img": "proj_pics/SIC.jpg",
                "description": " Social Innovation Cell is most appropriately a blend of the two terms that we all relate to, NSS and IIT Delhi. We at the Social Innovation Cell aim to apply technical knowledge and design new techniques to provide innovative solutions for the problems faced by society and for the conservation of resources. We try to achieve this aim by motivating and training the IIT Delhi student population to innovate for societal well-being. ",
                "link": "",
                "name": "Social Innovation Cell",
                "location": "IIT Delhi",
                "address": "IN2",
            },

            {
                "image": "VIDYA.png",
                "proj_img": "https://lh4.googleusercontent.com/BbaVjETn-GvcLUvUcZOoRXJe1j-L3lL0oHsujcHAOqyS9n0w14YptvNEztOZwQ9s889QE3wz0UzUKtc5fDLLrNyKtI7JZZ460LjF1lGJlbjverr3wTjfJh7J4rKHbl0-18m7EM5d",
                "description": "Our prime focus at VIDYA is to teach students from classes 4th to 12th (and even some college students and adults) and inculcate the fundamental concepts of all subjects, especially Mathematics and Science. We make assignments, host fun activities and take regular assessment exams all the while holding regular teaching 5-6 days a week. Through our efforts, we have hosted several extra-curricular activities and conducted classes for the students with impeccable regularity. We wish to bring about a change in the lives of our students by empowering them through quality education and overall development.",
                "link": "http://nss.iitd.ac.in/links/VIDYA_Teaching",
                "name": "VIDYA Teaching Project",
                "location": "Kendriya Vidyalaya, IIT Delhi",
                "address": "ED8"
            },

            //  {
            // "image": "ApnaParivaar.jpg",
            // "proj_img":"proj_pics/ApnaParivaar.jpg",
            // "description": "A stable and nurturing childhood is essential for a healthy physio- emotional and spiritual development of a human being. Aiming this in children's home project we try to give kids various exposure to different things, inculcate thinking skills in them, provide them creative environment for studies through various activities. \u201cAn investment in knowledge pays the best dividends\u201d. Other than studies our focus is to develop their personality and improve their interpersonal skills. In this project 4 volunteers visit Apna parivaar children's home on every sunday from 12:30 to 5:30 in Mandigaon (near Chhatarpur). For keeping the regular track on kids volunteers have to be regular and passionate for the work.",
            // "link": "http://nss.iitd.ac.in/links/Apna_Parivaar_Children_Home",
            // "name": "Apna Parivaar Children Home",
            // "location": "Mandi Village (Near Chhatarpur)" ,"address": "ApnaParivaar"},

            {
                "image": "aarohan.jpeg",
                "proj_img": "https://lh5.googleusercontent.com/RKAnmOkfuo2X0QrffCJcImS89M9EHWEiTkzK8xJAuLH8McBdoWarYICSegpN6k7e2NV86C5zpJbj31Q8GIi9WlT_X192X9u9wlYYZKOQj-qeQwgDE06kAGcyCvmqVcRppHeI8vig",
                "description": "Aarohan aims to provide free and quality education to the students of class 11th and 12th to help them prepare for examinations like JEE Mains & Advanced. We primarily focus on economically weaker sections of society. The competition to get into IITs and NITs has increased a lot, and it has become challenging to crack these exams without coaching and the proper guidance. We are currently in collaboration with NGOs like Saraswati Sewa Foundation (SSF), Edjustice, and VIDYA, who help us reach out to our beneficiaries.",
                "link": "",
                "name": "Aarohan",
                "location": "Blocks,HauzKhas,IIT Delhi",
                "address": "ED1"
            },

            {
                "image": "Substanceabuse.png",
                "proj_img": "https://lh5.googleusercontent.com/6rJ-7IDA5KwvNou0M_oBROzE1n2gpl4D03jWLUXD1ut4xN2-YBcEvv_gAC4wrDcV6Wo8_gKRlnjOC7kexB4uc8STou_UbmhS-gPZIBntR6XdXPxJbij_ThZ2GzRRb-Z4Fllfibg_",
                "description": "“An over-indulgence of anything, even something as pure as water, can intoxicate.” Thankfully water is not addictive, but alcohol, drugs and cigarettes are. Under this project, we try to eradicate the problem of substance abuse in our IIT campus and beyond. Two domains in which we work include: (i) making the newcomers aware of the problem, (ii) recovery of the people indulging in abuse. ",
                "link": "",
                "name": "Substance Abuse",
                "location": "IIT Delhi",
                "address": "HE4"
            },

            // {"image": "clean.jpg", "description": "Supporting the Swachh Bharat Abhiyan, this project aims at conducting drives to clean that place and thus sensitize students and residents to keep there surroundings specially public places clean.",
            //  "link": "",
            //  "name": "Cleanliness Drive",
            //  "location": "IIT Delhi" ,
            //  "address": "CleanlinessDrives"},

            //   {"image": "",
            //  "description": "The project aims to segregate recyclable paper from normal waste in the institute. It also aims at sensitising the community about the wastage of paper.",
            //  "link": "",
            //  "name": "Waste Paper Recycling Initiative",
            //  "location": "IIT Delhi" ,"address": "WastePaper"},

            {
                "image": "NAB.jpg",
                "proj_img": "https://lh3.googleusercontent.com/v64-KCM92eibbfQmtAXAGctrP_Fv7BxYDBHWsY-Xk2yBq63kQ0kNv_OaTJVTAeY4edRy0cL4TwJ9rkl3_17F2C6zUXw1SZ-ziIU1HToolNnIBaR2Oe4v2FzIIX_5gvnj0UhEj4i2",
                "description": "As truly said, \"Hope is being able to see that there is light despite all the darkness. \" Believing in the same, this project works for the upliftment of the visually impaired kids from NAB RK Puram. There is a well-known saying that, a teacher can change life with just the right mix of chalk and challenges. Our main focus here is to educate them so that they can stand on their own feet. We teach them different subjects like Science, Maths, English, Computer, etc. through one-on-one classes with the volunteers. We also try to help prepare their schedule of academic syllabus and provide mentoring for future opportunities. Also, providing scribes for various exams of visually impaired people is a very important part of this project.",
                "link": "",
                "name": "NAB RK Puram",
                "location": "NAB hauz khas, NAB RK Puram ",
                "address": "ED3"
            },


            //   {"image": "",
            // "proj_img":"proj_pics/SIC.jpg",
            //    "description": "The SIC is most appropriately a blend of the two terms that we all relate to, NSS and IIT Delhi. We, at the Social Innovation Cell aim to utilize the available technology and design new techniques to target problems faced by the society and for conservation of resources. We try to achieve this aim by motivating and training the IIT Delhi student population to innovate for the societal well-being.",
            //    "link": "",
            //    "name": "SIC",
            //    "location": "IIT Delhi" ,"address": "SIC"},


            //   {"image": "Munirka.png",
            // "proj_img":"proj_pics/munirka.jpg",
            //    "description": "The munirka project aims for the upliftment of the slum community by making it self-reliant in various spheres. We believe that the future of the community is in the hands of the children of the community. Hence, our prime focus is on the overall character development of the kids mainly through education. We provide help to the kids of Munirka slums not just by teaching them but to instil in them love for education so that they may excel in their future endeavours. This is done by interactive teaching and by conducting various fun activities. Extra-curricular activities are also organised to ensure that each kid has a multifaceted personality. Other than that we try to inculcate moral values in them. NSS volunteers are required to go to Munirka Basti from Jwala circle and teach kids various subjects. Volunteers are also needed to design content for teaching and planning activities.",
            //    "link": "",
            //    "name": "Munirka Teaching Project",
            //    "location": "Munirka Basti (Near RK Puram) " ,"address": "Munrika"},








            {
                "image": "AC.png",
                "proj_img": "https://lh5.googleusercontent.com/7aAVVysJz32KXCzkG3UbRS2aiYLJ-NjhMlum2Oyfg6tgUSxPnji5hyBDiShJvF7PgvCIIysPntUi-JUkXKq7ZegBsdRzQsxw9cdgO3nFN8PjkGMG2LVYS2HtnQ9ZhwO-VqyZLapj",
                "description": "This project aims to raise public awareness of the pain and suffering of animals by sensitising people to their plight. We promote animal care and foster interactions on and off campus, teach people how to deal with animals, and provide a forum for animal lovers to get involved. We monitor daily feeding of the animals on campus, provide medical care and treatment to the injuries, conduct sterilisation drives and activities like DIY: Water DIspenser Making, that are in best interests of the animals.",
                "link": "",
                "name": "Animal Care",
                "location": "",
                "address": "EN1"
            },


            {
                "image": "Internships.png",
                "proj_img": "https://lh5.googleusercontent.com/PZxuTjVaMHwmVppxB04O9x-C7Fob3TWuYoBDPzqQLLLKsem_SKGs-xb29tM7UaKpUQsnprE3e6kAn72QQ21evatTeHnAR08R4gZYDmv-cPO_A4hJ5aqI4tzo6M-GWgJPOmGHWC8X",
                "description": "We organise ground-level internships during winter and summer vacations for students with different NGOs working in diverse domains. These internships have witnessed a great response from the IIT Delhi student community and have provided a great learning experience for the NSS volunteers.",
                "link": "",
                "name": "Internships",
                "location": "All across India",
                "address": "IT1"
            },


            {
                "image": "ClimateCrusade.jpg",
                "proj_img": "https://lh4.googleusercontent.com/m6TQcVyCvyOO9ZWBAodtdLw1dxsj1_hmvZ371Si8d9fEVXJ0CPdpNutQ9mK1K8y9Bs9tacTLjArEXFU3I_dYdhcvA-NskM6MlRAMPd5rIb7s7Aro3GGgjDZTUHgMRjO75esdohbD",
                "description": "Climate Crusade is an initiative taken by NSS IIT Delhi to tackle Climate Change. The team aims to spread awareness in order to sensitise people towards this topic via Social Media and through activities like Facts of Friday, DIY activities, and Case Studies. We also conduct activities to promote proper waste segregation and judicious use of resources, leading to a sustainable lifestyle.",
                "link": "",
                "name": "Climate Crusade",
                "location": "IIT Delhi",
                "address": "EN2"
            },


            // {"image": "",
            //  "description": "Toy from Trash or TFT is an initiative of NSS IIT Delhi to create a interest among the kids in the field of science and engineering. Our main targets are those kids who are deprived of proper environment where they can develop their interest. As the name suggest the volunteers make some scientific toys from useless or easily available materials. They then demonstrate these in munirka village or apna parivar.",
            //  "link": "",
            //  "name": "Toy from trash",
            //  "location": "Munirka and apna parivar" ,"address": "ToyFromTrash"},

            {
                "image": "Gender_Mainstreaming-removebg-preview.png",
                "proj_img": "proj_pics/Gender.jpeg",
                "description": "Through this project, we try to analyse and sensitise people about questionable stereotypes and notions relating to gender and sex. We initiate discussions on topics like equality, stereotypes, discrimination based on gender identity and sexuality. We ideate new ways to raise awareness of these issues in and out of campus. Also we find different pertinent issues regarding gender in our society to bring them to light. Our main goal is to ensure everyone is given information on gender issues in an easily digestible way to ensure maximum impact.",
                "link": "",
                "name": "Gender Mainstreaming",
                "location": "IIT Delhi",
                "address": "SE3"
            },

            //   {"image": "foodforthought.png",
            // "proj_img":"proj_pics/Food.jpg",
            //    "description": "This project of NSS IIT Delhi is run in collaboration with Food4Thought Organization with a purpose to connect idle books to hungry minds, restore endangered books & stories, reignite the joy of reading and build school & community libraries. With this we aim to bring a reading revolution. Books can spread knowledge, change lives and bring revolutions. Books are the link which connects ages and makes humanity flow. We help children in reading books. We make sure that they have exposure to books other than just coursebooks. We ask people and institutions to donate used books and provide those books to the needy.",
            //    "link": "",
            //    "name": "Food4Thought",
            //    "location": "Delhi" ,"address": "Food4Thought"},


            {
                "image": "green_warrior-removebg-preview.png",
                "proj_img": "https://lh4.googleusercontent.com/kfxvCNcunwwWWGz52EFvkkcpkGAEPEdCAKeMUpA41xw2ry73XCW7NNpHV0o7lU5yAqtGNSAjGYZIL3WwRH1Mhkmz0sR6BeTayAqbHHqPlqOJYDZwzIW3cjU0s1bKwNWYpGOot3JX",
                "description": "In Green Warriors, we aim to work towards the betterment of the environment by raising awareness and by conducting on ground activities to make the campus greener. We also focus on the less-known issues like the effects of E-waste, conduct tree plantation drives, and employ innovative methods to spread the message of a cleaner and greener planet.",
                "link": "",
                "name": "Green warrior",
                "location": "IIT Delhi",
                "address": "EN4"
            },

            {
                "image": "Old Age Home (png).png",
                "proj_img": "https://lh5.googleusercontent.com/RLWGgPG0sGMk98dC1PG-u9fS3_WLYcRvILREj2a5tXPGldCQULL77cImquBBFWFe0BRBDYVyxoPTdNoJlmSJbOo2b0z-3Tmt-ZJASwYD_xgugD1Up52tq2IYPKaxXIXGu5al35iD",
                "description": "The aim of the project is to provide emotional support to senior citizens in old age homes. We also aim to sensitise people about issues faced by senior citizens in old age homes.We try to connect senior citizens in the old age homes to volunteers. We conduct regular visits to old age homes and try to bring happiness in their lives by conversations, celebrating birthdays, or simply by singing their favourite songs. Similarly, we execute different initiatives to connect elderly people in old age homes to volunteers.",
                "link": "",
                "name": "Old Age Home",
                "location": "",
                "address": "SE5"
            },


            {
                "image": "Know your rights .jpg",
                "description": "We aim to spread awareness regarding the government policies amongst underprivileged people and assist them in obtaining access to these policies. We plan trips to several slums, construction sites, and roadside locations as part of this effort to educate people about government policies.",
                "link": "",
                "proj_img": "https://lh4.googleusercontent.com/EWYBsPnJyY0TKE_83wkdMpZMwoREuJdLLdDhifhzjP5D49_XtHPWDT36L4EDv6edxa5L6aitMWNa2ln5f1PYM_5vDu2c9TMyuEzqORn4e3CCNanoCSWYQZiKxXVMbcJorAEZp0hF",
                "name": "Know Your Rights",
                "location": "Munirka Basti (Near RK Puram) ",
                "address": "SE4"
            },


            {
                "image": "collectiondrive.jpg",
                "proj_img": "https://lh3.googleusercontent.com/9PrFEzWJ8-XauITcTDJmZaC004sWvOZhpUQWmMACkTmeG50gDJkMph2B7l0qra5bOa6D_rN94u3MWTKDfz1-uuXsC4WIqpCP5VwbAlDF0CtM82JpF4_nwD292UYiQD37X-NRB8U7",
                "description": "Collection Drive is an initiative of NSS IIT Delhi to collect unused extra items from the people living in the campus, and distribute it among the needy. We have collaborated with the NGO Goonj for this purpose. We are involved in collecting, sorting and then transporting items donated by people all over the campus to this NGO. It is to help the underprivileged people make better use of those items that lay around gathering dust in our homes.",
                "link": "http://nss.iitd.ac.in/links/Collection_Drive",
                "name": "Collection Drives",
                "location": "IIT Campus",
                "address": "SE2"
            },


        ];
});

app.controller('MainCtrl', function($scope, $location, $rootScope, $mdDialog, $window, $mdSidenav, $timeout) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $rootScope.isPath = function(viewLocation) {
        return viewLocation === $location.path();
    };

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }
    $timeout(function() {
        $rootScope.loadingComp = true;
    }, 0);
    $scope.subscribe = function(user) {
        $window.location.href = ('https://groups.google.com/group/' + user.type + '/boxsubscribe');
    };

    // caraousel Images starts from here
    $scope.carouselImages = [{
            "Name": "Artists performing in Rendezvous 2017",
            "img": "images/carousel/image1.png"
        }, {
            "Name": "Artists performing in Rendezvous 2017",
            "img": "images/carousel/image2.jpg"
        }, {
            "Name": "Artists performing in Rendezvous 2017",
            "img": "images/carousel/image3.jpg"
        }, {
            "Name": "Artists performing in Rendezvous 2017",
            "img": "images/carousel/image5.jpeg"
        }, {
            "Name": "Artists performing in Rendezvous 2017",
            "img": "images/carousel/image6.jpeg"
        }, {
            "Name": "Artists performing in Rendezvous 2017",
            "img": "images/carousel/image7.jpeg"
        }


    ];


    // FAQ's starts form here
    $scope.accordianData = [{
            "question": "What is NSS IIT Delhi all about?",
            "answer": "NSS IIT Delhi is the IIT Delhi chapter of the National Service Scheme, institutionalized under the Ministry of Youth Affairs & Sports Govt. of India. Our sole aim is to motivate students at IIT Delhi to indulge in nation building activities through various events and projects which are aimed towards the benefit of people in and around IIT Delhi. We share the belief that such activities are almost always means of great satisfaction and joy.We believe in bringing the change we wish to see. <br> 		If you wish to work with us to create a positive impact in the society, join our hands and be a part of this journey together."
        },
        {
            "question": "Who all can be a part of it?",
            "answer": "Anyone can help us in our initiatives in whatever capacity they can.<br> If you are a student of IIT Delhi, you need to choose an option between NSS, NCC and NSO at the time of taking admission and have to complete 100 hours of work among any one of them. If you choose NSS as an option, then you need to complete these hours in NSS.<br> Even if you decide to opt for NSO/NCC, you can help us in our initiatives if  you wish to."
        },
        {
            "question": "Is it possible to switch to NSS if you opted for NSO/NCC earlier?",
            "answer": "The first yearites get an option to change the option at the starting of 2nd Semester. The exact procedure of the change will be notified to you well before that time comes through mails.<br> If that time has already gone by, or if you are not a fresher, then just have faith in these words of Ratan Tata, 'I don't believe in taking right decisions; I take decisions and make them right.'<br> The above mentioned quote is the only solace which we could provide to you in this case. However in special circumstances if you have opted for NCC/NSO and are unable to take part in their activities for medical reasons, you could be allowed a shift to NSS after necessary approval from the respective coordinators.<br> Anybody who wishes to be a part of any NSS activity is invited and attendance for all will be taken."
        },
        {
            "question": "What is the 100 hours rule in NSS? How strictly is it followed?",
            "answer": "As mentioned above, you need to complete 100 hours in NSS/NSO/NCC depending on the choice you make, before the end of your 4th semester. We have our hours policy which we strictly follow to give hours to NSS volunteers. Else you will not be allowed to register for the next semester."
        },
        {
            "question": "What if you are unable to complete 100 NSS hours in the first 2 years?",
            "answer": "According to IIT rules, a student is not allowed to register in the 5th semester if he/she hasn�t completed his/her hours by the end of second year in IIT."
        },
        {
            "question": "What is the difference between ‘Ground’ and ‘Non-Ground’ events?",
            "answer": "<u>Non Ground</u> event are those events in which you are made aware about social issues prevailing in the society. It could include speeches, movies and discussions but doesn�t involve any ground-level work. It is a first step on the path of social change. Also Non Ground level volunteering includes all online, Content Development and tech related work one does.<br> In <u>Ground</u> events, you are just not allowed to sit in a LT. You are taken to the outside world where you volunteer for the cause you believe in. It could be anything related to education, nature, health, women empowerment, tech projects or anything which you think can create a social impact.<br> These aim to provide a larger picture about social causes and will help you identify your area of interest.<br> 		You are not allowed to complete all your hours through Non Ground events because we want you to experience the real thing! When you go out and try to give something to this world, you get more from this world than you expected. In the end, you will be a better person and you won�t complain about this 40-60 hours restriction.<br> Remember the words of Confucius - 'I hear and I forget. I see and I remember. I do and I understand.'"
        },
        {
            "question": "Is it difficult to complete 100 NSS hours?",
            "answer": "Completing hours in NSS is not a difficult task at all. The easiest way to complete your hours is not to think about it. There are a plethora of activities in NSS which happen throughout the year. You just need to find the activities which you are interested in. If you are able to find them, you will definitely enjoy them and completing hours will become a cakewalk for you."
        },
        // {
        //   "question":"Sounds good. So, what are the various NGOs where it is possible to volunteer through NSS? Can you elaborate the work done by them? ",
        //   "answer":"You can find the list of all NGOs, their work profile and the point of contact here:<a href='http://nss.iitd.ac.in/#!/about_nss' target='_blank'>http://nss.iitd.ac.in/#!/about_nss</a><br> We encourage people to find other organizations in diverse fields for volunteering. NSS IIT Delhi wants people to gain as much exposure to social and environmental issues as possible. To know more about our volunteering opportunities, please visit this link:<a href='http://nss.iitd.ac.in/#!/involve_volunteering'>http://nss.iitd.ac.in/#!/involve_volunteering</a> In case of any query or confusion, you can always contact us at <a href='nssinbox@gmail.com.'  >nssinbox@gmail.com.</a>"
        // },
        {
            "question": "Are all NSS events carried out within IIT campus, or also outside it?",
            "answer": "In NSS, we try to provide you with a wide variety of opportunities out of which you can choose whatever you wish to.</br> You can always explore nature through nature walks, work in self-arranged internships, come along with us on exposure trips to different communities, work on an NSS project to bring a change in people’s lives, and many more exciting things."
        },
        {
            "question": "How will I get to know about any upcoming/ongoing NSS volunteering opportunity?",
            "answer": "You can subscribe to the Google group of your respective year to get updates about the upcoming NSS events.<br>To subscribe to google group: <a href='http://nss.iitd.ac.in/#!/#section6' target='_blank'>http://nss.iitd.ac.in/subscribe.html</a><br> 		Some of the important links that might come handy are: <br>		We try to be eco-friendly and thus generally do not put posters in the campus for the upcoming events and rather focus on online publicity through gmail and facebook.<br>	Some of the important links that might come handy are:		Website: <a href='http://nss.iitd.ac.in' target='_blank'>http://nss.iitd.ac.in</a><br> Facebook page: <a href='https://www.facebook.com/NSSIITDelhi' target='_blank'>http://www.facebook.com/NSSIITDelhi</a> <br>Instagram: <a href='https://www.instagram.com/nssiitd/?hl=en' target='_blank'>https://www.instagram.com/nssiitd/?hl=en</a><br> Linkedin: <a href='https://www.linkedin.com/company/nss-iit-delhi' target='_blank'>https://www.linkedin.com/company/nss-iit-delhi</a><br> Twitter: <a href='https://mobile.twitter.com/nss_iitd' target='_blank'>https://mobile.twitter.com/nss_iitd</a><br>	"
        },
        // {
        //   "question":"Is NSS just about the conventional social service? Where is the fun involved in it?",
        //   "answer":"The answer depends on how you define the term �conventional social service�. NSS is all about bringing happiness in life of people around us, directly or indirectly. We try to make this world a better place to live in; socially and environmentally. If you think that bringing smiles to someone�s face comes under conventional social service, then yes, NSS is just about that. Else, we are much more than that.<br> To know if there is fun involved in it, you need to get involved in it. The kind of happiness that you will get by adding smiles to someone else�s life is difficult to describe in words. We are not selfless bunch of students; we do it because we find fun for ourselves in it. <br> 		Join us and explore the answers on your own! :)"
        // },
        // {
        //   "question":"I�m involved in other activities in IIT too. Will NSS events' timings match with the timings feasible to me?",
        //   "answer":"Yes. We have events and volunteering opportunities after classes and even on weekends. There are regular volunteering opportunities which could be chosen according to your free timings. If you are not able to devote much time during the semester, you can join any of the internships floated by us in summer or winter vacations."
        // },
        {
            "question": "Will NSS events' timings make it feasible for me to participate in other activities at IIT?",
            "answer": "Yes. We have events and volunteering opportunities after classes and even on weekends. There are regular volunteering opportunities which could be chosen according to your free timings. If you are not able to devote much time during the semester, you can join any of the internships floated by us in summer or winter vacations."
        },
        {
            "question": "Who can help me to resolve my queries if I still have some doubts?          ",
            "answer": "You can find all of our current team members on<a href='http://nss.iitd.ac.in/#!/team_current' target='_blank'> http://nss.iitd.ac.in/#!/current_team</a> . It would be better if you ask your queries to a team member who belongs to your hostel as it would be easier to contact him/her. 	In case you feel your query wasn�t solved, you can mail us at nssinbox@gmail.com. It has answer of all questions related to NSS!"
        }
    ];
    $scope.collapseAll = function(data) {
        for (var i in $scope.accordianData) {
            if ($scope.accordianData[i] != data) {
                $scope.accordianData[i].expanded = false;
            }
        }
        data.expanded = !data.expanded;
    };
});

app.controller('TeamCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {
    $scope.expandDetail = function(member, ev) {
        $mdDialog.show({
                controller: function($mdDialog) {
                    var vm = this;
                    vm.member = {};
                    vm.member = member; //your task object from the ng-repeat

                    $scope.hide = function() {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };
                },
                controllerAs: 'infomodal',
                templateUrl: 'templates/member.details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {

            }, function() {

            });
    };

    $scope.mentor_1617 = [{
            'name': 'Amar Srivastava',
            'designation': 'Team Mentor',
            'image': 'images/team/amar.jpg',
            'email': '',
            'description': 'I am a simple person who likes to spread happiness around :) Have a passion for cricket and books. I believe in the saying No Gain, No Pain and believe in giving my hundred percent in everything.	'
        },
        {
            'name': 'Vaibhav Garg',
            'designation': 'Team Mentor',
            'image': 'images/team/vaibhav.jpg',
            'email': '',
            'description': ''
        }
    ];

    $scope.gsec_1617 = [{
            'name': 'Anurag Acharya',
            'designation': 'General Secretary',
            'image': 'images/team/anurag.jpg',
            'email': 'nssgsec@iitd.ac.in',
            'description': 'Nature loving person, truthful to everyone, believe in doing things different, i like to make people smile but doing so might irritate them some time, love to spend time with kids, like to do some stupid stuff, drawing and painting is sort of my art :P, car travelling in rain and foodyperson.'
        },
        {
            'name': 'Ayush Kumar',
            'designation': 'General Secretary',
            'image': 'images/team/ayush.jpg',
            'email': ' nssgsec@iitd.ac.in',
            'description': ''
        }
    ];

    $scope.secy_1617 = [{
        'name': 'Ashwaghosh Manohare',
        'designation': 'Secretary',
        'image': 'images/team/ashwa.jpg',
        'email': 'ashwaghoshiit@gmail.com',
        'description': ''
    }, {
        'name': 'Jishnudeep Kar',
        'designation': 'Secretary',
        'image': 'images/team/jishnudeep.jpg',
        'email': 'jishnudeep.kar@gmail.com',
        'description': ''
    }, {
        'name': 'Madhur Kumar Shakya',
        'designation': 'Secretary',
        'image': 'images/team/madhur.jpg',
        'email': 'madhurkshakya@gmail.com',
        'description': ''
    }, {
        'name': 'Niladri Shekhar Mandal ',
        'designation': 'Secretary',
        'image': 'images/team/the_boss.jpg',
        'email': 'niladrisekharmandal@gmail.com',
        'description': ''
    }, {
        'name': 'Praful Agarwal',
        'designation': 'Secretary',
        'image': 'images/team/praful.jpg',
        'email': 'praful.agr@gmail.com',
        'description': ''
    }, {
        'name': 'Rupika Taneja',
        'designation': 'Secretary',
        'image': 'images/team/rupika.jpg',
        'email': 'rupikataneja1996@gmail.com',
        'description': ''
    }, {
        'name': 'Utkarsh Agarwal',
        'designation': 'Secretary',
        'image': 'images/team/agarwal.jpg',
        'email': 'utkarsh6991@gmail.com',
        'description': ''
    }, {
        'name': 'VBSS Reddy',
        'designation': 'Secretary',
        'image': 'images/team/bala.jpg',
        'email': 'vanukuri.balasai@gmail.com',
        'description': ''
    }];

    $scope.exec_1617 = [{
        'name': 'Aditya Kumar',
        'designation': 'Executive',
        'image': 'images/team/aditya.jpg',
        'email': 'aditya.kmr2121@gmail.com',
        'description': ''
    }, {
        'name': 'Aishvi Jain',
        'designation': 'Executive',
        'image': 'images/team/aishvi.jpg',
        'email': 'aishvijain1@gmail.com',
        'description': ''
    }, {
        'name': 'Akhil Singla',
        'designation': 'Executive',
        'image': 'images/team/akhil.jpg',
        'email': 'akhilsingl8@gmail.com',
        'description': ''
    }, {
        'name': 'Ashray Gupta',
        'designation': 'Executive',
        'image': 'images/team/ashray.jpg',
        'email': 'ashraygupta1@gmail.com',
        'description': ''
    }, {
        'name': 'Ayush Rai',
        'designation': 'Executive',
        'image': 'images/team/rai.jpg',
        'email': 'ayushrai1114@gmail.com',
        'description': ''
    }, {
        'name': 'Divyank Mittal',
        'designation': 'Executive',
        'image': 'images/team/divyank.jpg',
        'email': 'divyank.mittal@gmail.com',
        'description': ''
    }, {
        'name': 'Harman Singh',
        'designation': 'Executive',
        'image': 'images/team/harman.jpg',
        'email': 'harmans59@gmail.com',
        'description': ''
    }, {
        'name': 'Harsh Maheshwari',
        'designation': 'Executive',
        'image': 'images/team/maheshwari.jpg',
        'email': 'harshm121@gmail.com',
        'description': ''
    }, {
        'name': 'Harshvardhan',
        'designation': 'Executive',
        'image': 'images/team/harry.jpg',
        'email': 'satyamrsm@gmail.com',
        'description': ''
    }, {
        'name': 'Komal Arya',
        'designation': 'Executive',
        'image': 'images/team/komal.jpg',
        'email': 'guruarya3@gmail.com',
        'description': ''
    }, {
        'name': 'Kritika Sharma',
        'designation': 'Executive',
        'image': 'images/team/kritika.jpg',
        'email': 'krisharma999@gmail.com',
        'description': ''
    }, {
        'name': 'Narayani Bhatia',
        'designation': 'Executive',
        'image': 'images/team/narayani.jpg',
        'email': 'narayani.97@gmail.com',
        'description': ''
    }, {
        'name': 'Prachi Gupta',
        'designation': 'Executive',
        'image': 'images/team/prachigupta.jpg',
        'email': 'prachigupta.iitd@gmail.com',
        'description': ''
    }, {
        'name': 'Raunak Gautam',
        'designation': 'Executive',
        'image': 'images/team/raunak.jpg',
        'email': 'gautam.raunak13@gmail.com',
        'description': ''
    }, {
        'name': 'Sahil Khokhar ',
        'designation': 'Executive',
        'image': 'images/team/sahil.jpg',
        'email': 'sahilkhokhar505@gmail.com',
        'description': ''
    }, {
        'name': 'Sakshi Jain',
        'designation': 'Executive',
        'image': 'images/team/sakshi.jpg',
        'email': 'smartsj2511@gmail.com',
        'description': ''
    }, {
        'name': 'Sarthak Jain',
        'designation': 'Executive',
        'image': 'images/team/sarthak.jpg',
        'email': 'sarjain1997@gmail.com',
        'description': ''
    }, {
        'name': 'Simar Kaur Mattewal',
        'designation': 'Executive',
        'image': 'images/team/simar.jpg',
        'email': 'simar0497@gmail.com',
        'description': ''
    }, {
        'name': 'Subhankar Dash',
        'designation': 'Executive',
        'image': 'images/team/subhankar.jpg',
        'email': 'dashsubhankar@gmail.com',
        'description': ''
    }];

    $scope.prof_prev = [{
        "designation": "PROFESSOR CO-ORDINATOR, NSS IIT Delhi",
        'image': 'images/team/rajesh.jpg',
        "email": "rajesh@am.iitd.ac.in",
        "name": "Prof. Rajesh Prasad"
    }]

    $scope.mentor_1718 = [{
            "description": "Nature loving person, truthful to everyone, believe in doing things different, i like to make people smile but doing so might irritate them some time, love to spend time with kids, like to do some stupid stuff, drawing and painting is sort of my art :P, car travelling in rain and foodyperson.",
            "designation": "Team Mentor",
            "image": "images/team/anurag.jpg",
            "comments": "",

            "projects": "",
            "name": "Anurag Acharya"
        },
        {
            "description": "I love to listen to music and play cricket in my leisure time. I am a nature lover and believe, \"There must be a technical solution to the problems around us\" and I always try to find one.",
            "designation": "Team Mentor",
            "image": "images/team/ayush.jpg",
            "comments": "",

            "projects": "",
            "name": "Ayush Kumar"
        }
    ]

    $scope.gsec_1718 = [{
            "description": "Hi there reader! I am currently pursuing B.Tech in Electrical Engineering and in my 4th year. And I love coding. Just love it. But the thing closest to my heart is . . . Guess what ? NSS . You can just feel the joy of volunteering . Describing in words is not possible. Happy volunteering :)",
            "designation": "G. Secretary",
            "image": "images/team/jishnudeep.jpg",
            "comments": "",
            "email": "nssgsec@iitd.ac.in",
            "projects": "",
            "name": "Jishnudeep Kar"
        },
        {
            "description": "\"Let the people explore if you really want to teach them. Your role should be just to facilitate it\"\nReading and watching stories involved in Indian Mythology is my cup of tea. I love to listen slow songs. I adore kids and like greenery.",
            "designation": "G. Secretary",
            "image": "images/team/madhur.jpg",
            "comments": "",
            "email": "nssgsec@iitd.ac.in",
            "projects": "",
            "name": "Madhur Kumar Shakya"
        },
        {
            "description": "\"Do what you love and love what you do. Don't listen to anyone else who tells you not to do it. You do what you want, what you love. Imagination should be the center of your life.\"",
            "designation": "G. Secretary",
            "image": "images/team/utkarsh.jpg",
            "comments": "",
            "email": "nssgsec@iitd.ac.in",
            "projects": "",
            "name": "Utkarsh Agarwal"
        }
    ]

    $scope.secy_1718 = [{
            "description": "I believe that making assumptions is part of any investigation. If we're wrong, all it'll cost is an apology but if you can't win the game, if you can't solve the puzzle, then you're nothing but a loser.",
            "designation": "Secretary",
            "image": "images/team/aditya.jpg",
            "comments": "",
            "email": "aditya.kmr2121@gmail.com",
            "projects": "Projects:	Lakshyam Project, Bachpan, Nature Lovers, Blood Donation Camps, Organ Donation Camps, RTE, Blanket Distribution Drive",
            "name": "Aditya Kumar"
        },
        {
            "description": "I like to talk to new people and to know about their experiences and make new friends. I like to play basket ball, badminton and like to swim too. I love and enjoy spending time with small kids. I am a seeker, want to learn everything I can and like to explore as much I can. I like dancing, drama, sketching and is very crazy about making new useful and creative things from useless and waste things, I love travelling too.",
            "designation": "Secretary",
            "image": "images/team/aishvi.jpg",
            "comments": "",
            "email": "aishvijain1@gmail.com",
            "projects": "Projects:	Munirka Teaching Project, Munirka Community Work, Toys From Trash, Old Age Home,DNip Care, Road Safety, Health Camps",
            "name": "Aishvi Jain"
        },
        {
            "description": "I like to interact with new people, make new friends and to spend time with them. I love teaching children, watching cricket and playing squash. Interested in travelling and learning new things.",
            "designation": "Secretary",
            "image": "images/team/divyank.jpg",
            "comments": "",
            "email": "divyank.mittal@gmail.com",
            "projects": "Projects:	Apna Parivaar Children Home, Vidya Teaching, Neem School, Collection Drives",
            "name": "Divyank Mittal"
        },
        {
            "description": "I consider our beloved world as an opportunity to see things from a non-conventional viewpoint. I believe in exploring simple solutions to complex problems, for simplicity (topped with uniqueness) is the best policy! If you want to experiment with your ideas feel free to approach and brainstorm with me :)",
            "designation": "Secretary",
            "image": "images/team/harman.png",
            "comments": "",
            "email": "harmans59@gmail.com",
            "projects": "Projects:	Aarohan Teaching Project, Climate Crusade, Green Warrior and Internships",
            "name": "Harman Singh"
        },
        {
            "description": "I believe every life has a purpose, I am trying to fulfill mine. :)",
            "designation": "Secretary",
            "image": "images/team/harsh.jpg",
            "comments": "",
            "email": "harshm121@gmail.com",
            "projects": "Projects:	Animal Care, Cleanliness Drive, Substance Abuse, Waste Paper Recycling Initiative",
            "name": "Harsh Maheshwari"
        },
        {
            "description": "I believe we all keep changing and love making bonds with people. My hobbies are listening songs and reading. I think science and innovation (in right direction) can solve many of the problems that we face today.",
            "designation": "Secretary",
            "image": "images/team/raunak.jpg",
            "comments": "",
            "email": "gautam.raunak13@gmail.com",
            "projects": "Projects:	Extra Currics, NAB, Social Innovation Cell, Anti-Human Trafficking Project, Collection Drive",
            "name": "Raunak Gautam"
        },
        {
            "description": "No set of words can describe me completely. You could say that faith keeps me going.",
            "designation": "Secretary",
            "image": "images/team/simar.jpg",
            "comments": "",
            "email": "simar0497@gmail.com",
            "projects": "Projects:	5th Space, Animal Care, Food4Thought, Gender Sensitization, Green Warrior, NSS Magazine",
            "name": "Simar Kaur Mattewal"
        }
    ]

    $scope.exec_1718 = [{
            "description": "I am a sophomore in the Department of Electrical Engineering. I like to explore new domains and fields to find the one that suits me best. I like programming, reading, playing badminton and chess. I love to travel to new places and try different cuisines. ",
            "designation": "Executive",
            "image": "images/team/adityaabhi.jpg",
            "comments": "",
            "email": "aditya.abhishek27@gmail.com",
            "projects": "Projects:   Green Warrior Project, Substance Abuse Project (SAP), Neem School Project, Social Innovation Cell (SIC), NSS Website",
            "name": "Aditya Abhishek"
        },
        {
            "description": "I like writing and exploring. A nature and animal-loving person. I feel happy when I am able to make someone smile. Hobbies include T.T. and swimming. Foodie. I believe in living everyday to the fullest because you get this gift of life only once :)",
            "designation": "Executive",
            "image": "images/team/adityasingla.jpg",
            "comments": "",
            "email": "adityasingla676@gmail.com",
            "projects": "Projects:   Munirka, Animal Care, Blood and Organ Donation Camps",
            "name": "Aditya Singla"
        },
        {
            "description": "A famous sanskrit shloka is the guiding force of my life \"\u0905\u092d\u093f\u0935\u093e\u0926\u0928 \u0936\u0940\u0932\u0938\u094d\u092f \u0928\u093f\u0924\u094d\u092f\u0902 \u0935\u0943\u0926\u094d\u0927\u094b\u092a\u0938\u0947\u0935\u093f\u0928\u0903 \u0964\n\u091a\u0924\u094d\u0935\u093e\u0930\u093f \u0924\u0938\u094d\u092f \u0935\u0930\u094d\u0927\u0928\u094d\u0924\u0947 \u0906\u092f\u0941\u0930\u094d\u0935\u093f\u0926\u094d\u092f\u093e \u092f\u0936\u094b \u092c\u0932\u092e\u094d \u0965\" I believe simplicity and positivity adds quality to our life. I bet, you will never regret my company :) ",
            "designation": "Executive",
            "image": "images/team/Ashutosh.jpg",
            "comments": "",
            "email": "ashutoshrajiitd@gmail.com",
            "projects": "Projects:   Lakshyam, Social Innovation Cell, Documentation",
            "name": "Ashutosh Raj"
        },
        {
            "description": "I like old hindi songs. I am passionate about badminton and programming. I also like to read mystery novels (Hardy Boys).",
            "designation": "Executive",
            "image": "images/team/Chinmay.jpg",
            "comments": "",
            "email": "chinmaya.xavier@gmail.com",
            "projects": "Projects:   Aarohan,Green Warrior,Climate Crusade,Internships",
            "name": "Chinmay Singh"
        },
        {
            "description": "I enjoy spending time with family and friends. Just believe in something and everything.",
            "designation": "Executive",
            "image": "images/team/Devendra.jpg",
            "comments": "",
            "email": "devendradewanda97@gmail.com",
            "projects": "Projects:   Lakshyam, Vidya",
            "name": "Devendra Dewanda"
        },
        {
            "description": "I enjoy meeting new people, exploring new things, new places. I like to help people to find solution of their problems. I also enjoy travelling, cooking, watching movies, going out for dinner, and having intellectual conversations!",
            "designation": "Executive",
            "image": "images/team/Garima.jpg",
            "comments": "",
            "email": "garima.g.29.07@gmail.com",
            "projects": "Projects:   Children's Home, Vidya, Blanket distribution Drive,tree plantation and nature walks,waste paper recycling initiatives, RTE",
            "name": "Garima Gupta"
        },
        {
            "description": "I like to read articles, quora, watch movies and debate. I like to make new friends. Love to play T.T., Badminton and watch Cricket. ",
            "designation": "Executive",
            "image": "images/team/Hritik.jpg",
            "comments": "",
            "email": "hbansal10n@gmail.com",
            "projects": "Projects:   Aarohan,Bachpan",
            "name": "Hritik Bansal"
        },
        {
            "description": "I am a technical guy who mostly spends his time on the computer (who doesn't ?). Absolutely love to listen to all genres of music. I like watching animes & tv shows. Love spending my time with friends. I am passionate about programming.",
            "designation": "Executive",
            "image": "images/team/Kaustubh.jpg",
            "comments": "",
            "email": "kaustubh698@gmail.com",
            "projects": "Projects:   Munirka, Food for Thought, Blood and Organ Donation Camps, Health Camps, Waste Paper Recycling Initiative ",
            "name": "Kaustubh Prakash"
        },
        {
            "description": "I am guy who loves interaction with people and loves making new friends. I mostly spend my time on my laptop watching anime. Another thing I am good at is exploring places and eating various cuisines.",
            "designation": "Executive",
            "image": "images/team/Kunal.jpg",
            "comments": "",
            "email": "kunalrnarayan@gmail.com",
            "projects": "Projects:   Vidya Teaching Project, Neem School, Climate Crusade and Substance Abuse Project",
            "name": "Kunal Narayan"
        },
        {
            "description": "I love reading books (even the text books :p). I am a quiet person, at times, too much loud. I enjoy discussions on spirituality. I appreciate art and culture. I listen to every genre of music. I am interested in people, their life stories and struggles. Always ready if someone needs help.",
            "designation": "Executive",
            "image": "images/team/Malay.jpeg",
            "comments": "",
            "email": "malayjain1@gmail.com",
            "projects": "Projects:   NAB, Food4Thought, Pravah, Timeline, RTE",
            "name": "Malay Jain"
        },
        {
            "description": "Children are very special for me. I don't think that there can be greater happiness than talking and playing with them . I want to meet different people and know about their problems and try to contribute in reducing their problems .",
            "designation": "Executive",
            "image": "images/team/Mamta.jpg",
            "comments": "",
            "email": "er.mamtaiit@gmail.com",
            "projects": "Projects:   Dnip care/ NAB /Road safety campaign / cleanliness drive",
            "name": "Mamta"
        },
        {
            "description": "I would like to connect to new people. I love playing any sports anytime. To be honest, I feel I'm a bit pessimistic but always try to be positive. I love reading novels (though haven't read many) and watching TV series.",
            "designation": "Executive",
            "image": "images/team/Mohit.jpg",
            "comments": "",
            "email": "gmohit200@gmail.com",
            "projects": "Projects:   Apna Parivar, Gender Sensitisation, Extra Currics, Animal Care",
            "name": "Mohit Goyal"
        },
        {
            "description": "I like to communicate and socialize with new people; love to read novels and manga. Interested in research in the field of Molecular Biology and Genetics.",
            "designation": "Executive",
            "image": "images/team/Saksham.jpg",
            "comments": "",
            "email": "sakshamre@gmail.com",
            "projects": "Projects:   Green Warrior, Gender Sensitization, Bachpan",
            "name": "Saksham Sharma"
        },
        {
            "description": "\u0915\u094b\u0908 \u092d\u0940 \u0915\u093e\u092e \u0916\u093c\u0941\u0936\u0940 \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u0939\u0940\u0902 \u092c\u0932\u094d\u0915\u093f \u0939\u0930 \u0915\u093e\u092e \u0916\u093c\u0941\u0936\u0940 \u0938\u0947 \u0939\u0940 \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u093f\u090f\u0964 This was a line I learnt from my school director. Also I always try to sit in a receiving mode. Apart from this I love to interact with people and teaching children. I also like music.",
            "designation": "Executive",
            "image": "images/team/Sanchit.jpg",
            "comments": "",
            "email": "sanchitsharma596@gmail.com",
            "projects": "Projects:   Apna Parivaar Children Home, Lakshyam, SIC, Climate Crusade",
            "name": "Sanchit Sharma"
        },
        {
            "description": "I like to teach children and love to watch tv series",
            "designation": "Executive",
            "image": "images/team/Sarthak.jpeg",
            "comments": "",
            "email": "sarthakasati@gmail.com",
            "projects": "Projects:   Munirka Teaching Project,RTE Munirka,Health Camps",
            "name": "Sarthak Asati"
        },
        {
            "description": "One of the most precious things which we have got: Friends, love to be with them, roam, study and make new ones. watching web/tv series and standup comedy are my other favourites.",
            "designation": "Executive",
            "image": "images/team/ShivamK.jpg",
            "comments": "",
            "email": "online.shivamkumar@gmail.com",
            "projects": "Projects:   Substance Abuse, Road Safety, Toys from Trash",
            "name": "Shivam kumar"
        },
        {
            "description": "A person, prior to the responsibilities. Love to interact with people and have lengthy discussions. Possessing a great learning attitude, it's not okay for me, unless I do it. A social freak, traveller and truly a nature lover.",
            "designation": "Executive",
            "image": "images/team/ShivamS.jpg",
            "comments": "",
            "email": "singlashivam022@gmail.com",
            "projects": "Projects:   Green Warrior, Anti-human Trafficking, Extra Currics",
            "name": "Shivam Singla"
        },
        {
            "description": "I like to interact with different people and always seek to learn something from them. My first impression in people's mind is that I am introvert person but when you will spend time with me you will explore real me. I like playing badminton, chess, reading novels and listening music.",
            "designation": "Executive",
            "image": "images/team/Ujjwal.jpg",
            "comments": "",
            "email": "ujjwaltater92@gmail.com",
            "projects": "Projects:   Aarohan, Anti-Human Trafficking, Road Safety",
            "name": "Ujjwal N Tater"
        },
        {
            "description": "I just find myself happy with simple things, appreciating the blessings God gave me. I love myself, I love my crazy lifestyle. I love that I have learned to trust people by heart. I take a lot of pride in being myself. I am comfortable with who I am.",
            "designation": "Executive",
            "image": "images/team/Vidushi.jpg",
            "comments": "",
            "email": "vidarya99@gmail.com",
            "projects": "Projects:   NAB, Food for Thought, Cleanliness drive, Collection drive, Internships",
            "name": "Vidushi Toshniwal"
        },
        {
            "description": "I love to learn new aspects of life from wherever I can, meeting new people and sharing their experiences, trying new activities, travelling all are (I believe) part of the learning. I believe our each and every step counts in c",
            "designation": "Executive",
            "image": "images/team/Vikram.jfif",
            "comments": "",
            "email": "vikrambaranwal46@gmail.com",
            "projects": "Projects:   Old age home, Dnip Care, Tree Plantation and Nature Walk, Collection Drives",
            "name": "Vikram Baranwal"
        },
        {
            "description": "I am a little introvert, I guess. But those who know me closely can tell that I can be very talkative especially when it comes to intellectual or ethical talks . I like playing badminton. I am quite emotional especially for kids and animals. My bucket list includes a world tour with besties and watching snowfall\ud83d\ude0d.",
            "designation": "Executive",
            "image": "images/team/Yashasvi.jpg",
            "comments": "",
            "email": "yashasvi1611@gmail.com",
            "projects": "Projects:    Oldage Home,Toy from Trash ,Animal Care, Health Camps, Gender Sensitization, Inventory",
            "name": "Yashasvi Maurya"
        },
        {
            "description": "Not me but you.",
            "designation": "M.Tech / PhD Rep",
            "image": "images/team/hardik.jpeg",
            "comments": "",
            "email": "iitd.hardik@gmail.ccom",
            "projects": "Projects:    Old Age Home, NAB, Blood Donation Camps, Tree Plantation and Nature Walks, Animal Care, Bachpan",
            "name": "Hardik Patel"
        },
        {
            "description": "When I look at little kids, I see unlimited possibilities. I love to inspire and awaken the flames in their heart. I want to be the teacher the kids need, they would hunt me down with their questions because they know I can take it. I love being their watchful protector, a silent guardian, their Batman. ",
            "designation": "M.Tech / PhD Rep",
            "image": "images/team/Mandeep.jpg",
            "comments": "",
            "email": "ask.mandeep.singh@gmail.com",
            "projects": "Projects:    Vidya, Lakshyam, Aarohan, Animal Care, Humans for Animals",
            "name": "Mandeep Singh"
        },
        {
            "description": "I consider myself an evolving specie. Everyday I learn new things which adds new dimension and knowledge to my life. I am inspired by Sir Kalam. I would like to contribute my gained experiences for humanity through scientific temperament, social inclusiveness and our indigenous morality",
            "designation": "M.Tech / PhD Rep",
            "image": "images/team/Rehan.jpg",
            "comments": "",
            "email": "rehanali.iitr@gmail.com",
            "projects": "",
            "name": "Rehan Ali Pradhan"
        }
    ];
    $scope.gsec1516 = [{
            'name': 'Amar Srivastava',
            'designation': 'General Secretary',
            'image': 'images/team/amar.jpg',
            'email': 'ams26.iitd@gmail.com',
            'description': 'I am a simple person who likes to spread happiness around :) Have a passion for cricket and books. I believe in the saying No Gain, No Pain and believe in giving my hundred percent in everything.'
        },
        {
            'name': 'Vaibhav Garg',
            'designation': 'General Secretary',
            'image': 'images/team/vaibhav.jpg',
            'email': ' vgarg.iitd@gmail.com',
            'description': 'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
        }
    ];
    $scope.secy1516 = [{
            'name': 'Anurag Acharya',
            'designation': 'Secretary',
            'image': 'images/team/anurag.jpg',
            'email': 'anuragacharyaiitd2013@gmail.com',
            "projects": "Field of Work:   Pravah, Road Safety Project, Invisible childern of india, NAB RK Puram, SIC",
            'description': 'Nature loving person, truthful to everyone, believe in doing things different, i like to make people smile but doing so might irritate them some time, love to spend time with kids, like to do some stupid stuff, drawing and painting is sort of my art :P, car travelling in rain and foodyperson.'
        },
        {
            'name': 'Ayush Kumar',
            'designation': 'Secretary',
            'image': 'images/team/ayush.jpg',
            'email': 'kumarayush750@gmail.com ',
            "projects": "Field of Work:   Green Warrior,Cleanliness Drive,Toys from Trash, Blanket Distribution Drive",
            'description': 'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
        },
        {
            'name': 'Amitesh Singh',
            'designation': 'Secretary',
            'image': 'images/team/amitesh.jpg',
            'email': 'amitesh1singh@gmail.com',
            "projects": "Field of Work:   Animal Care, Urban Exposure Trip, Historical Trip, Goonj, RTE, RTI",
            'description': 'An avid reader, occasional writer, a physicist in the making, an explorer at heart. Sauve at times, but usually chilled out! Have a slightly geekish sense of humour, Love building things out of scratch, Have a knack for making things work. What some folks may call narcissism, I call awesomeness! ;)'
        }, {
            'name': 'Kushal Satya',
            'designation': 'Secretary',
            'image': 'images/team/kushal.jpg',
            'email': 'satya.kushal@gmail.com',
            "projects": "Field of Work:    Munirka,Lakshyam,SIC,Sports,Website,E waste",
            'description': 'I love my friends and my parents very much. I am sincere and hardworking. I want to make this world a better place'
        }, {
            'name': 'Paurush Mittal',
            'designation': 'Secretary',
            'image': 'images/team/paurush.jpg',
            'email': 'paurushmittal@gmail.com',
            'projects': ' Field of Work : Aarohan,Mess Teaching,App,Health Camp',
            'description': ' I am simple guy : friendly and a jugaadu. I believe in working smart and an entrepernuer by heart.'
        },
        {
            'name': 'Rashmi Raj',
            'designation': 'Secretary',
            'image': 'images/team/rashmi.jpg',
            'email': 'r2rashmiraj@gmail.com',
            'projects': ' Field of Work : NAB, Stree, Nature Walk, Dance Project',
            'description': ' An undergraduate student of Maths & Computing who loves to do lots of talking and travelling, exploring new places. If you wants to talk random things you can always rely on me. Apart from that I love listening music and watching Harry Potter. My funda of life is to live in the moment.'
        },
        {
            'name': 'Unnati Mahajan',
            'designation': 'Secretary',
            'image': 'images/team/unnati.jpg',
            'email': 'unnatimahajan95@gmail.com',
            'projects': ' Field of Work : Vidya Teaching Project, Orphanage, Collection drives, Organ Donation, Social Innovation Cell, Publicity',
            'description': ' I am an undergraduate student of Chemical Engineering. I like meeting new people and exploring new avenues. I adore kids, enjoy reading and spending time with my friends.'
        },
        {
            'name': 'Vinkush Dhamija',
            'designation': 'Secretary',
            'image': 'images/team/vinkush.jpg',
            'email': 'vinkushdhamija16@gmail.com',
            'projects': ' Field of Work: Dnip,Medicine Baba,Blood Donation,Sub.Abuse,Collection Drive',
            'description': ' A typical punjabi minus the drinking, always in the mood for food, music and chit-chat, a bit outspoken. Some may find me offensive at times but most of them get used to it. Also intersted in travelling especially to places with a historical feel to them.Love to watch friends, football and non-indian cricket.'
        },
        {
            'name': 'Zaheer Hassan',
            'designation': 'Secretary',
            'image': 'images/team/zaheer.jpg',
            'email': 'zahherhassan895@gmail.com',
            'projects': '',
            'description': ' I love to hang around with buddies and enjoy with them. Masti karna bahut pasand hai mujhe nd I love dogs..I have interest in astronomy and astrology..Love to read romantic novels and bi bahut kuch hai jo mujhse milne k baad pta chal jaega..And friends bnana mujhe kaafi pasand hai.'
        }
    ];
    $scope.exe1516 = [{
            'name': 'Anil Basak',
            'designation': 'Executive',
            'image': 'images/team/',
            'email': 'anilbasakab@gmail.com',
            'projects': ' Field of Work : Munirka Teaching,Mess Teaching,Green Warrior, RTI session,Poster collection drive',
            'description': ' I am a nature loving person and likes to see the world greenish. I love teaching and learning things. I like to play and watch cricket and table tennis, watch comedy films and serials. I believe in "niswaarth karm karo, fal ki chinta mat karo."'
        },
        {
            'name': 'Aparana Gupta ',
            'designation': 'Executive',
            'image': 'images/team/aparana.jpg',
            'email': 'aparana.iitd@gmail.com',
            'projects': ' Field of Work : Aarohan,Stree,Substance Abuse ',
            'description': ' I love to code and read novels.I like teaching students whenever i am free. I like travelling a lot. I wish to do something to ensure that women get equal opportunities and are treated indiscriminately. An introvert. '
        },
        {
            'name': 'Ashwaghosh Manohare',
            'designation': 'Executive',
            'image': 'images/team/ashwa.jpg',
            'email': 'ashwaghoshiit@gmail.com',
            'projects': ' Field of Work : Lakshyam, Pravah, Dance Education',
            'description': ' I like when people call me Ashwa instead of "Ashwaghosh", I love to dance & never miss a chance to dance. I like the preamble of Indian Constitution, one can find the way to make India better in it.'
        },
        {
            'name': 'Bhaskar Kotakonda',
            'designation': 'Executive',
            'image': 'images/team/bhaskar.jpg',
            'email': 'bhaskar.sai12@gmail.com',
            'projects': ' Field of Work : DNIP Care , Toys from Trash, SIC ',
            'description': ' Like to keep things simple and spread positive vibes. Might appear shy in the first impression but can make a really good friend. Hobbies include Gymming, Badminton and playing the piano. Movie Buff and hardcore ABD fan.'
        },
        {
            'name': 'Harsh Arya ',
            'designation': 'Executive',
            'image': 'images/team/harsharya.jpg',
            'email': ' harshaa47@gmail.com',
            'projects': ' Field of Work : Stree, Aarohan, SIC ',
            'description': ' I am a sophomore from Computer Science department.'
        },
        {
            'name': 'Jishnudeep Kar',
            'designation': 'Executive',
            'image': 'images/team/jishnudeep.jpg',
            'email': 'jishnudeep.kar@gmail.com',
            'projects': ' Field of Work : Aarohan,Health Camps,Organ Donation, Campus Cleanliness and Collection Drives,Road Safety',
            'description': ' I am a student of Electrical Engineering Department. I like to spend time with friends. I am always enthusiastic to learn about new technological advancements in the world. And yeah, i like flying.'
        },
        {
            'name': 'Karan Dwivedi ',
            'designation': 'Executive',
            'image': 'images/team/karan.jpg',
            'email': 'karan.dwivedi42@gmail.com',
            'projects': ' Field of Work : SIC, Stree, RTE ',
            'description': ' I enjoy thinking of creative solutions to problems and helping others as much as possible. I spend a lot of time out of my comfort zone. I prefer working more than talking. I believe in the Force.'
        },
        {
            'name': 'Madhur Kumar Shakya',
            'designation': 'Executive',
            'image': 'images/team/madhur.jpg',
            'email': 'madhurkshakya@gmail.com',
            'projects': ' Field of Work : Vidya, Orphanage, Tree plantation drives',
            'description': ' I am a simple guy and like music especially listening to slow songs. I love to teach children and spread greenary all around. I like to play squash with my friend in late night.'
        },
        {
            'name': 'Neelotpal Nag ',
            'designation': 'Executive',
            'image': 'images/team/neel.jpg',
            'email': 'neelotpalnag@gmail.com',
            'projects': ' Field of Work : Music Masti, NAB HK,Tree Plantation,Internships, NSSinbox,NSS app',
            'description': ' Determined to bring a change, yearn for creativity in everything, LOVE animals, make very few friends(friends, not acquaintances), Hard-shelled-soft-cored. crazy about EARNING(the right way) and GIVING. '
        },
        {
            'name': 'Neha Rangari ',
            'designation': 'Executive',
            'image': 'images/team/neha.jpg',
            'email': 'neharangari005@gmail.com ',
            'projects': ' Field of Work : orphanage,green warrior,mess teaching,dance education ',
            'description': ' I take time to open up, but once I do, I can be a good friend. I am very fond of children. I like dancing and adventure. I get a sense of contentment when I serve the needy and enjoy doing it. I am honest, sincere and dedicated to any work I do. '
        },
        {
            'name': 'Niladri Shekhar Mandal ',
            'designation': 'Executive',
            'image': 'images/team/the_boss.jpg',
            'email': 'niladrisekharmandal@gmail.com',
            'projects': ' Field of Work : Lakshyam,SAHAS,Ewaste,Internships,Bio Gas Plant,Urban Exposure Trip,Historical Place,Documentation ',
            'description': ' Passion and perseverence makes me what I am. A chess enthusiast, I like watching sports(Although I play none!!). Benefit of society is the ultimate goal of my life. And I like to do stuff in my way.'
        },
        {
            'name': 'P. Sai Satvik ',
            'designation': 'Executive',
            'image': 'images/team/satvik.jpg',
            'email': 'satvik.pss@gmail.com',
            'projects': ' Field of Work : Aarohan,Blood donation camps,Exposure trips,Internships,RTE,Tree plantation drive ',
            'description': ' Student of Mathematics and Computing.I firmly believe that the more you give, the more you get. Food and selfie freak.I love teaching Mathematics. I love listening to music, hardcore Eminem fan. '
        },
        {
            'name': 'Praful Agarwal',
            'designation': 'Executive',
            'image': 'images/team/praful.jpg',
            'email': 'praful.agr@gmail.com',
            "projects": "Projects:   Pravah, Road Safety Project, Invisible childern of india, NAB RK Puram, SIC",
            'description': 'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
        }, {
            'name': 'Rupika Taneja',
            'designation': 'Executive',
            'image': 'images/team/rupika.jpg',
            'email': 'rupikataneja1996@gmail.com',
            "projects": "Projects:   Pravah, Road Safety Project, Invisible childern of india, NAB RK Puram, SIC",
            'description': 'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
        },
        {
            'name': 'Seema Shrotriya ',
            'designation': 'Executive',
            'image': 'images/team/seema.jpg',
            'email': 'shrotriyaseema3008@gmail.com ',
            'projects': ' Field of Work : Munirka teaching project,Oldage home,Nature walk ,Collection Drive ,Rural exoposure trip. ',
            'description': ' I am friendly and fun loving girl who loves to explore things and take up new challenges. I love nature and am really passionate for serving its children. Interested in music, random dancing, desi tasty food and ya talking a lot. Simplicity and honesty are the principles I follow. '
        },
        {
            'name': 'Shailendra Dhakar',
            'designation': 'Executive',
            'image': 'images/team/shailendra.jpg',
            'email': ' s.dhakad.iitd@gmail.com',
            'projects': ' Field of Work : Munirka, Animal Care',
            'description': ' I love to help. I really like to interact with new people, travelling, animal lover and a nature loving person. I strongly believe in doing things and being the change we wish to see in the world.'
        },
        {
            'name': 'Sheetal Kanade ',
            'designation': 'Executive',
            'image': 'images/team/sheetal.jpg',
            'email': 'srkiitd@gmail.com ',
            'projects': ' Field of Work : Lakshyam ,SIC, RTE, Chess teaching, Substance abuse ',
            'description': ' I am a simple girl, who always keeps smiling and likes to spread that smile all around. I love teaching, specially kids. I like to listen music and exploring new things. I prefer working and thinking rather than talking. '
        },
        {
            'name': 'Sri Harshavardhan Kuchi ',
            'designation': 'Executive',
            'image': 'images/team/kuchi.jpg',
            'email': 'sriharsha803@hotmail.com ',
            'projects': ' Field of Work : Munirka Teaching, NAB RK Puram, Collection Drive, Cleanliness Drive, Blood donation camps ',
            'description': ' I am a sophomore from Mechanical Engineering Department. I love to spend time with friends. I am crazy about fast food. In short I am a Bibliophile, FB fanatic, Cricket devotee and Technofreak. '
        },
        {
            'name': 'Sumit Kumar Mishra',
            'designation': 'Executive',
            'image': 'images/team/sumit.jpg',
            'email': 'sumit121m@gmail.com',
            'projects': ' Field of Work : Munirka ,Toys from trash, Green warriors,E waste, Internship ',
            'description': 'I firmly believe that everything is just a reward. I appreciate inventions(inventory ideas) so if you have one ping me. Good time I am okay , Bad time I am okay .  '
        },
        {
            'name': 'Utkarsh Agarwal',
            'designation': 'Executive',
            'image': 'images/team/agarwal.jpg',
            'email': 'utkarsh6991@gmail.com',
            "projects": "Projects:   Pravah, Road Safety Project, Invisible childern of india, NAB RK Puram, SIC",
            'description': 'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
        },
        {
            'name': 'Utkarsh Ojha ',
            'designation': 'Executive',
            'image': 'images/team/ojha.jpg',
            'email': 'utkarshojha612@gmail.com',
            'projects': ' Field of Work : Vidya, Green Warrior, Mess, Health Camps, Blanket distribution, SaveLife workshop, RTI, Visits. ',
            'description': ' "I am a 2nd year undergraduate in Mechanical Engineering department.I have a keen interest in involving myself in social service and helping others. I love playing cricket as well as watching it. " '
        }, {
            'name': 'VBSS Reddy',
            'designation': 'Executive',
            'image': 'images/team/bala.jpg',
            'email': 'vanukuri.balasai@gmail.com',
            "projects": "Projects:   Pravah, Road Safety Project, Invisible childern of india, NAB RK Puram, SIC",
            'description': 'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, There must be a technical solution to the problems around us and I always try to find one.'
        }



    ];

    $scope.prof_cur = [{
        'name': 'Prof. Samrat Mukhopadhyay',
        'designation': 'Co-ordinator NSS IIT Delhi',
        'image': 'images/team1819/samrat.jpeg',
        'email': 'nssincharge@admin.iitd.ac.in',
        'description': 'Essentially I love to interact with people - more importantly people who seek to create a difference. Trying to learn from life and the smallest	creations of nature. Music and photography are very close to my heart...If you would like to listen to my stories in pictures, pl do visit: <a href="https://www.500px.com/samrat_iitd/galleries" target="_blank">https://www.500px.com/samrat_iitd/galleries</a>'
    }];

    $scope.faculty_advisor_cur = [{
            'name': 'Prof. Naveen Thayyil',
            'designation': 'Faculty Advisor (Education)',
            'image': 'images/team1920/naveen.jpg',
            'email': 'nthayyil@iitd.ac.in',
            'description': 'Education',
        },
        {
            'name': 'Prof. Vikram Singh',
            'designation': 'Faculty Advisor (Environment)',
            'image': 'images/team1920/vikram.jpg',
            'email': 'vs225@chemical.iitd.ac.in',
            'description': 'I love the beautiful and objective world of science. Currently, I am losing my sleep on the impact of technology on the world around us. In my free time, I like spending time in theater, on squash courts, and with animals wherever I run into them.',
        },
        {
            'name': 'Prof. Sourabh Ghosh',
            'designation': 'Faculty Advisor (Health)',
            'image': 'images/team1920/sourabh_ghosh.jpg',
            'email': 'sghosh08@textile.iitd.ac.in',
            'description': 'Health',
        },
        {
            'name': 'Prof. Seshan Srirangarajan',
            'designation': 'Faculty Advisor (Society)',
            'image': 'images/team1920/Seshan_Srirangarajan.jpg',
            'email': 'seshan@ee.iitd.ac.in',
            'description': 'I have a keen interest in environmental and social issues including waste management, air pollution, sustainable lifestyle practices, and animal welfare. I strongly believe that we need to start acting on these issues in our personal capacity rather than wait for policy changes.',
        }
    ];


    $scope.mentor_1819 = [{
        'name': 'Jishnudeep Kar ',
        'designation': 'Team Mentor ',
        'image': 'images/team1819/jishnu.jpg',
        'projects': ' ',
        'phone': ' ',
        'email': 'jishnudeep.kar@gmail.com ',
        'description': ' '
    }, {
        'name': 'Madhur Shakya ',
        'designation': 'Team Mentor ',
        'image': 'images/team1819/madhur.jpeg',
        'projects': ' ',
        'phone': ' ',
        'email': 'madhurshakya7@gmail.com ',
        'description': ' '
    }, {
        'name': 'Utkarsh Agrawal ',
        'designation': 'Team Mentor ',
        'image': 'images/team1819/utkarsh.jpg',
        'projects': ' ',
        'phone': ' ',
        'email': 'utkarsh6991@gmail.com ',
        'description': ' '
    }];

    $scope.gsec_1819 = [{
        'name': 'Divyank Mittal ',
        'designation': 'General Secretary ',
        'image': 'images/team1819/divyank.jpg',
        'projects': ' ',
        'phone': '7837467080 ',
        'email': 'nssgsec@iitd.ac.in',
        'description': 'I like to interact with new people, make new friends and to spend time with them. I love teaching children, watching cricket and playing squash. Interested in travelling and learning new things.'
    }, {
        'name': 'Simar Kaur Mattewal',
        'designation': 'General Secretary ',
        'image': 'images/team1819/simar.jpg',
        'projects': ' ',
        'phone': '9815558036 ',
        'email': 'nssgsec@iitd.ac.in',
        'description': 'One thing I can tell you about myself, faith keeps me going! '
    }];

    $scope.secy_1819 = [{
        'name': 'Aditya Abhishek ',
        'designation': 'Secretary ',
        'image': 'images/team1819/adityaabhishek.jpg',
        'projects': 'Vidya Teaching Project, NEEM School, Green Warriors, NSS Website ',
        'phone': '8298091247 ',
        'email': 'aditya.abhishek27@gmail.com ',
        'description': 'I like to explore new domains and fields to find the one that suits me best. I like programming, reading, playing badminton and chess. I love to travel to new places and try different cuisines. '
    }, {
        'name': 'Aditya Singla ',
        'designation': 'Secretary ',
        'image': 'images/team1819/adityasingla.jpg',
        'projects': 'Animal Care, Climate Crusade, Gender Mainstreaing, NSS Magazine ',
        'phone': '8950086891 ',
        'email': 'adityasingla676@gmail.com ',
        'description': 'Spreading happiness makes me happy :) '
    }, {
        'name': 'Ashutosh Raj ',
        'designation': 'Secretary ',
        'image': 'images/team1819/ashutosh.jpg',
        'projects': 'Lakshyam, SIC, 5th Space ',
        'phone': '9462657719 ',
        'email': 'ashutoshrajiitd@gmail.com ',
        'description': ' '
    }, {
        'name': 'Garima Gupta ',
        'designation': 'Secretary ',
        'image': 'images/team1819/garima.jpg',
        'projects': 'Apna Parivaar, nature lovers, extra-currics ',
        'phone': '7229809316 ',
        'email': 'garima.g.29.07@gmail.com ',
        'description': ' '
    }, {
        'name': 'Mohit Goyal ',
        'designation': 'Secretary ',
        'image': 'images/team1819/mohit.jpg',
        'projects': 'Blood Donation Camps, Animal Care, Bachpan ',
        'phone': '9540405502 ',
        'email': 'gmohit200@gmail.com ',
        'description': ' '
    }, {
        'name': 'Sarthak Asati ',
        'designation': 'Secretary ',
        'image': 'images/team1819/sarthak.jpg',
        'projects': 'Munirka,RTE,Science Speaks,Blanket Distribution Drives ',
        'phone': '9891055481 ',
        'email': 'sarthakasati@gmail.com ',
        'description': ' '
    }, {
        'name': 'Ujjwal Tater ',
        'designation': 'Secretary ',
        'image': 'images/team1819/ujjwal.jpg',
        'projects': 'Aarohan, Anti-Human Trafficking, Road Safety, Waste Paper Recycling, Delhi Govt Collaborations ',
        'phone': '9982237732 ',
        'email': 'ujjwaltater92@gmail.com ',
        'description': 'I like to interact with different people and always seek to learn something from them. My first impression in peoples mind is that I am introvert person but when you will spend time with me you will explore real me. I like playing badminton, chess, reading novels and listening music. '
    }, {
        'name': 'Vidushi Toshniwal ',
        'designation': 'Secretary ',
        'image': 'images/team1819/vidushi.JPG',
        'projects': 'NAB, Collection Drive, Internships, Food for thought ',
        'phone': '9540050334 ',
        'email': 'vidarya99@gmail.com ',
        'description': 'I love to explore and learn new things. I am a joyful person. I try to be happy in all the situations. I love painting, acting, listening music and chilling out with friends. I am always very curious to know about other people, and always ready to make new friends. '
    }, {
        'name': 'Vikram Baranwal ',
        'designation': 'Secretary ',
        'image': 'images/team1819/vikram.jpg',
        'projects': 'Old Age Home, Science Seeds, DNip Care, Collection Drive ',
        'phone': '9891040551 ',
        'email': 'vikrambaranwal46@gmail.com ',
        'description': ' '
    }, {
        'name': 'Yashasvi Maurya ',
        'designation': 'Secretary ',
        'image': 'images/team1819/yashasvi.jpg',
        'projects': 'Health Camps, Cleanliness Drive, Substance Abuse ',
        'phone': '8826088150 ',
        'email': 'yashasvi1611@gmail.com ',
        'description': 'I love travelling a lot. World tour is in my Bucket list. I like to play badminton. I am quite emotional so usually get attached to people fast. I like to watch fantasy movies with caramel popcorn. '
    }];

    $scope.exec_1819 = [{
        'name': 'Aditi Vikas ',
        'designation': 'Executive ',
        'image': 'images/team1819/aditi.JPG',
        'projects': 'Munirka, Dnip Care, 5th Space, Blood donation camps+organ donation camps ',
        'phone': '9818368678 ',
        'email': 'aditivikas99@gmail.com ',
        'description': 'I love travelling and exploring new places. I enjoy listening to music, watching movies and play the guitar.Love to spend time with animals and play with children. '
    }, {
        'name': 'Aryaman Sinha ',
        'designation': 'Executive ',
        'image': 'images/team1819/aryaman.png',
        'projects': 'Apna Parivaar, RTE, Blood donation camps and organ donation camps, Website and App, FB. ',
        'phone': '9811955381 ',
        'email': 'aryaman.sinha49@gmail.com ',
        'description': 'I am a fun loving, friendly and adventurous kind of person who loves to explore new things. I am a travel buff and great foodie. Being ambitious, I like to try out every opportunity possible. I believe that the biggest religion is serving humanity. '
    }, {
        'name': 'Ayan Jain ',
        'designation': 'Executive ',
        'image': 'images/team1819/ayan.jpg',
        'projects': 'Vidya, Food for thought, Internships, Blog ',
        'phone': '9560066533 ',
        'email': 'ayanjain123@gmail.com ',
        'description': 'Really curious about a lot of mysteries of life. I like playing chess, writing poems, listening to music, watching anime, and meeting new people. '
    }, {
        'name': 'Gaurav Brajesh Sharma ',
        'designation': 'Executive ',
        'image': 'images/team1819/gaurav.jpg',
        'projects': 'RTE, Animal Care, Substance Abuse ',
        'phone': '8448416852 ',
        'email': 'gbns261999@gmail.com ',
        'description': 'I am an anime weeb. I love reading manga and novels. Apart from that I like listening to pop music and I love animals and nature. I love exploring new things. '
    }, {
        'name': 'Harsh Yadav ',
        'designation': 'Executive ',
        'image': 'images/team1819/harsh.jpg',
        'projects': 'Green Warriors, Munrika, Anti-human trafficking and website ',
        'phone': '9079619518 ',
        'email': 're0501y@gmail.com ',
        'description': 'I love travelling; searching diffrent forms of nature that she provided to this Earth;A nature Lover. Love to been with children. And curious about mysteries. '
    }, {
        'name': 'Mayur Solanki ',
        'designation': 'Executive ',
        'image': 'images/team1819/mayur.jpg',
        'projects': 'Green Warriors, Animal Care, Science Speaks ',
        'phone': '9977741927 ',
        'email': 'mayursolanki207.ms@gmail.com ',
        'description': 'I am a nature loving person and believe in doing things different. I like to learn new things and want to explore as much as I can. I love to play football, volleyball and basketball, and watching TV series and anime. Interested in field of Data Privacy and Security. '
    }, {
        'name': 'Mohit Kumar Prajapat ',
        'designation': 'Executive ',
        'image': 'images/team1819/mohitprajapat.jpg',
        'projects': 'Green Warriors, Road safety, 5th Space ',
        'phone': '9599761018 ',
        'email': 'mohitprajapat31@gmail.com ',
        'description': 'I love to spend time with myself at night. I love to roam around in IIT at night if u want to know more about me its the best time. I am not able to stick with one TV series but I am a Friends fan. '
    }, {
        'name': 'Rajas Joshi ',
        'designation': 'Executive ',
        'image': 'images/team1819/rajas.jpeg',
        'projects': 'NAB, Animal Care, Collection drive, Inventory ',
        'phone': '8308849979 ',
        'email': 'rajas.s.joshi@gmail.com ',
        'description': 'I like watching football and traveling. '
    }, {
        'name': 'Sakshi Taparia ',
        'designation': 'executive ',
        'image': 'images/team1819/sakshi.jpg',
        'projects': 'NAB Hauz khas, gender mainstreaming and extra currics ',
        'phone': '9873792833 ',
        'email': 'sakshitaparia123@gmail.com ',
        'description': 'I am a rather sensitive and emotiona person; usually shy around people unless I know them very well. I love teaching children, not just academics but also giving moral education, support and guidance. '
    }, {
        'name': 'Shanmukhi Sripada ',
        'designation': 'Executive ',
        'image': 'images/team1819/shanmukhi.jpg',
        'projects': 'Munirka Teaching Project, Old Age Home Project, Cleanliness Drive ',
        'phone': '8130076185 ',
        'email': 'shannu98sripada@gmail.com ',
        'description': 'I am a Bharatanatyam dancer having pursued Bachelors of Art in this field. I love poetry and I have written a few poems on social issues. I have a keen interest in Abstract Mathematics. '
    }, {
        'name': 'Shivam Rathi ',
        'designation': 'Executive ',
        'image': 'images/team1819/shivam.jpg',
        'projects': 'Science Seeds,Apna Parivaar,Nature lover,Delhi Government Collaboration ',
        'phone': '9024990841 ',
        'email': 'shivam.rathi1998@gmail.com ',
        'description': 'Diverse interests. Love playing sports be it Basketball, Badminton, or  Table Tennis.Can solve rubiks cube in under a minute! Love performing and watch people perform magic tricks. Travel enthusiast. Talkative.Noob Photography and video editing. '
    }, {
        'name': 'Shubham Jain ',
        'designation': 'Executive ',
        'image': 'images/team1819/shubham.jpg',
        'projects': 'Vidya, Blanket Distribution Drive, Anti-Human-Trafficking, Bachpan ',
        'phone': '9911815152 ',
        'email': 'shubhamj810@gmail.com ',
        'description': 'I am trying to learn as much as I can. Music, anime, Jap/Kor shows, Youtube are my past-times. '
    }, {
        'name': 'Vasu Jain ',
        'designation': 'Executive ',
        'image': 'images/team1819/vasu.jpg',
        'projects': 'Vidya, NSS Magazine, Food for Thought , Climate Crusade, FB, RTE, Blood Donation Camps',
        'phone': '8750500101 ',
        'email': 'jain.vasu631@gmail.com ',
        'description': 'I was trying to write something interesting for you to read but then I realized I didnt have anything. So all I would like to say is that I am a very boring person. '
    }, {
        'name': 'Vishal Gupta ',
        'designation': 'Executive ',
        'image': 'images/team1819/vishal.jpg',
        'projects': 'Aarohan, Internships, Climate Crusade',
        'phone': '8826100656 ',
        'email': '001vishalgupta01@gmail.com ',
        'description': 'I just find myself happy with the simple things. Appreciating the blessings God gave me. I love travelling and doing crazy stuff.  I love making new friends. You can keep all your secrets safe with me and talk about anything. I am also a Potterhead and F.r.i.e.n.d.s fan. '
    }, {
        'name': 'Siddharth Sehgal ',
        'designation': 'Executive ',
        'image': 'images/team1819/siddharth.jpg',
        'projects': 'NEEM School, Gender Mainstreaming, Blanket Distribution, NSS Magazine, Collection Drive ',
        'phone': '8328941903 ',
        'email': 'siddharth.sehgal99@gmail.com ',
        'description': 'Geeky, fun loving, football fanatic Potterhead. Thats me in less than 50 characters. Apart from all this I love reading, memes, watching TV series, listening to psychedelic rock and observing. '
    }, {
        'name': 'Nipun Garg ',
        'designation': 'Executive ',
        'image': 'images/team1819/nipun.jpg',
        'projects': 'Lakshyam,Road Safety,Science Speaks,Delhi Govt ',
        'phone': '9988040290 ',
        'email': 'nipungarg80@gmail.com ',
        'description': 'I like to play sports. Abstract things!! Choo Choo Stay away. I want every individual to take the ownership of the nation '
    }, {
        'name': 'Paritosh Raj ',
        'designation': 'Executive ',
        'image': 'images/team1819/paritosh.jpg',
        'projects': 'Lakshyam, Old Age Home, SIC ',
        'phone': '9462657720 ',
        'email': 'paritoshrajiitd@gmail.com ',
        'description': 'I love to meet other people and try to learn from them. I play chess, watch movies and listen to music in my leisure time. If you want to know more about me, we can meet and discuss. '
    }, {
        'name': 'Pradyumna Jalan ',
        'designation': 'Executive ',
        'image': 'images/team1819/pradyumna.jpg',
        'projects': 'Bachpan, Animal Care, Nature Lover, SIC ',
        'phone': '9672946317 ',
        'email': 'pradumna79@gmail.com ',
        'description': 'There are lot of things that interests me. I usually love travelling around and explore new places, people and FOOD. '
    }, {
        'name': 'Shreyash Raj ',
        'designation': 'Executive ',
        'image': 'images/team1819/shreyas.png',
        'projects': 'Aarohan, blood donation, substance abuse, science seeds',
        'phone': '9123497107 ',
        'email': 'shreyashraj456@gmail.com ',
        'description': 'I love TT, music, maths, meeting new peeps & exploring new places all on my own. For more info, let us sit n talk someday:)) . '
    }, {
        'name': 'Tushar Baijal ',
        'designation': 'Executive ',
        'image': 'images/team1819/tushar.jpg',
        'projects': 'Aarohan, DNip, Internships, Cleanliness Drive, Documentation ',
        'phone': '9871857491 ',
        'email': 'tushar.baijal1999@gmail.com ',
        'description': 'I believe Game of Thrones is the epitome of human evolution. Other than that I love EDM, writing poems, memes, and chess'
    }, {
        'name': 'Vaibhav Baldwa ',
        'designation': 'Executive ',
        'image': 'images/team1819/vaibhav.jpg',
        'projects': 'Neem School,Aarohan,Health Camps ',
        'phone': '9427968118 ',
        'email': 'vaibhavbaldwa07@gmail.com ',
        'description': 'I am a hardworking guy,I love to follow sports especially football and tennis,I also love gaming and coding '
    }];

    $scope.pgrep_1819 = [{
        'name': 'Hardik Patel ',
        'designation': 'PG Rep ',
        'image': 'images/team1819/hardik.jpeg',
        'projects': ' ',
        'phone': '7600031187 ',
        'email': 'iitd.hardik@gmail.com ',
        'description': ' '
    }, {
        'name': 'Sweta Choubey ',
        'designation': 'PG Rep ',
        'image': 'images/team1819/sweta.jpeg',
        'projects': ' ',
        'phone': '9479587305 ',
        'email': 'swetachoubey01@gmail.com ',
        'description': ' '
    }, {
        'name': 'Ravi Raj ',
        'designation': 'PG Rep. ',
        'image': 'images/team1819/ravi.jpg',
        'projects': 'Old age home, collection drive, blanket donation drive,Orientation, PG publicity,Extra curics,App- based technologies ',
        'phone': '7831907095 ',
        'email': 'jmdravi09@gmail.com ',
        'description': 'Good at managing things & individuals, Nature lover, serving for humanity '
    }, {
        'name': 'Laxman Singh Bisht ',
        'designation': 'PG Rep ',
        'image': 'images/team1819/laxman.jpeg',
        'projects': 'Munirka, Animal Care, Anti-human Trafficking, Gender Mainstreaming ',
        'phone': '9560407507 ',
        'email': 'laxmanlsbisht@gmail.com ',
        'description': 'Actions speaks louder than words. '
    }, {
        'name': 'Hardeep Singh ',
        'designation': 'PG Rep ',
        'image': 'images/team1819/hardeep.jpeg',
        'projects': ' ',
        'phone': '9417674089 ',
        'email': 'hardeepjhinger93@gmail.com ',
        'description': ' '
    }, {
        'name': 'kartikeya ',
        'designation': 'PG Rep. ',
        'image': 'images/team1819/kartikeya.jpg',
        'projects': 'science seeds, organ+blood donation and Delhi Govt collaboration ',
        'phone': '8077878096 ',
        'email': 'kartikeya28@gmail.com ',
        'description': 'I like to run, lift stuff and read books, a lot of them. Also, my life revolves around superhero movies. '
    }, {
        'name': 'Uttaran Basak ',
        'designation': 'PG Rep ',
        'image': 'images/team1819/uttaran.jpg',
        'projects': 'Science seeds, Green Warriors, Climate Crusade ',
        'phone': '9772167560 ',
        'email': 'uttaran02@gmail.com ',
        'description': ' '
    }, {
        'name': 'Laxmi ',
        'designation': 'PG Rep ',
        'image': 'images/team1819/laxmi.jpeg',
        'projects': 'Animal Care, Old age home, Aarohan, Road safety ',
        'phone': '9411271457 ',
        'email': 'luckylaxmi93@gmail.com ',
        'description': 'I love to travel and explore new things, I like to indulge me in reading, dancing, sketching, doing poetry and somehow try to create beautiful world where I as well as others can cherish the freedom. '
    }];

    $scope.mentor_1920 = [{
            'name': 'Divyank Mittal',
            'designation': 'Team Mentor',
            'image': 'images/team1920/divyank.jpg',
            'email': 'divyank.mittal@gmail.com',
            'phone': '7837467080',
            'projects': '',
            'description': 'I like to interact with new people, make new friends and to spend time with them. I love teaching children, watching cricket and playing squash. Interested in travelling and learning new things.',
        },
        {
            'name': 'Simar Kaur Mattewal',
            'designation': 'Team Mentor',
            'image': 'images/team1920/simar.jpg',
            'email': 'simar0497@gmail.com',
            'phone': '9815558036',
            'projects': '',
            'description': 'One thing I can tell you about myself, faith keeps me going!',
        }
    ];


    $scope.gsec_1920 = [{
            'name': 'Aditya Abhishek',
            'designation': 'General Secretary',
            'image': 'images/team1920/aditya.jpg',
            'email': 'aditya.abhishek27@gmail.com',
            'phone': '8298091247',
            'projects': '',
            'description': 'I like to explore new domains and fields to find the one that suits me best. I like programming, reading, playing badminton and chess. I love to travel to new places and try different cuisines.',
        },
        {
            'name': 'Vidushi Toshniwal',
            'designation': 'General Secretary',
            'image': 'images/team1920/vidushi.jpg',
            'email': 'vidarya99@gmail.com',
            'phone': '9540050334',
            'projects': '',
            'description': 'I love to explore and learn new things. I am a joyful person. I try to be happy in all the situations. I love painting, acting, listening music and chilling out with friends. I am always very curious to know about other people, and always ready to make new friends.',
        }
    ];

    $scope.secy_1920 = [{
            'name': 'Aryaman Sinha',
            'designation': 'Secretary',
            'image': 'images/team1920/aryaman.jpg',
            'email': 'aryaman.sinha49@gmail.com',
            'phone': '9811955381',
            'projects': 'Field of Work : Apna Parivaar, Know Your Rights, NAB',
            'description': 'Experimentalist. Inquisitive. Travel buff. Being ambitious, I like to try out every opportunity possible. I am a fun loving person who tries to extract happiness in all small things',
        },
        {
            'name': 'Harsh Yadav',
            'designation': 'Secretary',
            'image': 'images/team1920/harsh.jpg',
            'email': 'ha1406y@gmail.com',
            'phone': '9079619518',
            'projects': 'Field of Work : Nature Lovers, Munirka, Neem',
            'description': 'A traveller who make efforts to seek beauty, love and happiness in the nature, and spread these in society. A simple guy who always tries to make people happy, likes fiddling around with friends, ready to make new friends and always take care of others. This guy likes travelling, playing games that involve many people, computer gaming too, ready to guide people.',
        },
        {
            'name': 'Paritosh Raj',
            'designation': 'Secretary',
            'image': 'images/team1920/paritosh.jpg',
            'email': 'paritoshrajiitd@gmail.com',
            'phone': '9462657720',
            'projects': 'Field of Work : Social Innovation Cell, Old Age Home, Collection Drive',
            'description': 'I love to meet other people and try to learn from them. I play chess, watch movies and listen to music in my leisure time. If you want to know more about me, we can meet and discuss.',
        },
        {
            'name': 'Saksham Sharma',
            'designation': 'Secretary',
            'image': 'images/team1920/saksham.jpg',
            'email': 'sakshamre@gmail.com',
            'phone': '7217740255',
            'projects': 'Field of Work : Gender Mainstreaming, Green Warrior, Animal care, Science Speaks',
            'description': 'I like to communicate and socialize with new people; love to read novels and manga. Interested in research in the field of Molecular Biology and Genetics.',
        },
        {
            'name': 'Shivam Rathi',
            'designation': 'Secretary',
            'image': 'images/team1920/shivam.jpg',
            'email': 'shivamrathi1998@gmail.com',
            'phone': '9024990841',
            'projects': 'Field of Work : Vidya Teaching Project, Health Camps, Blood Donation Camp',
            'description': 'Diverse interests. Love playing sports be it Basketball, Badminton, or Table Tennis.Can solve rubiks cube in under a minute! Love performing and watch people perform magic tricks. Travel enthusiast. Talkative.Noob Photography and video editing.',
        },
        {
            'name': 'Shreyash Raj',
            'designation': 'Secretary',
            'image': 'images/team1920/shreyash.jpg',
            'email': 'shreyashraj456@gmail.com',
            'phone': '9123497107',
            'projects': 'Field of Work : Substance Abuse, Aarohan, Blanket Distribution Drive, Science Seeds',
            'description': 'I love TT, music, maths, meeting new peeps & exploring new places all on my own. For more info, let us sit n talk someday:)) .',
        }
    ];

    $scope.exec_1920 = [{
            'name': 'Adil Aggarwal',
            'designation': 'Executive',
            'image': 'images/team1920/adil.jpg',
            'email': 'adilaggarwal99@gmail.com',
            'phone': '9109134477',
            'projects': 'Field of Work : Animal Care, Munirka Teaching Project, Gender Mainstreaming',
            'description': 'I see myself primarily as a beguiling army blood who loves to chatter and entertain people. Also, it\'s not wrong to say that I am an avid fiction reader and a quick learner. Besides being a crazy foodie and a mad dog lover, I strive to be a patient and a compassionate guy who is always ready to assist you in the best possible way.',
        },
        {
            'name': 'Aditi Rai',
            'designation': 'Executive',
            'image': 'images/team1920/aditi.jpg',
            'email': 'milirai26@gmail.com',
            'phone': '9521206458',
            'projects': 'Field of Work : Old Age Home, Bachpan, 5th Space',
            'description': '',
        },
        {
            'name': 'Aniket Jain',
            'designation': 'Executive',
            'image': 'images/team1920/aniket.jpg',
            'email': 'luckyshyamsukha9@gmail.com',
            'phone': '9799311116',
            'projects': 'Field of Work : Apna Parivar, 5th Space, Aarohan',
            'description': 'I love to interact with new people, loves old tradition, its mythology, love to play badminton, always have a new goal to achieve, ambitious with the work, never stop learning, sociable, caring.',
        },
        {
            'name': 'Ashish prasad',
            'designation': 'Executive',
            'image': 'images/team1920/ashish.jpg',
            'email': 'ashpd1710@gmail.com',
            'phone': '9766559517',
            'projects': 'Field of Work : NAB, Science Seeds, Social Innovation Challenge',
            'description': '',
        },
        {
            'name': 'Asim Rajvanshi',
            'designation': 'Executive',
            'image': 'images/team1920/asim.jpg',
            'email': 'asimrajvanshi1@gmail.com',
            'phone': '9717224396',
            'projects': 'Field of Work : Blood Donation Camps, VIDYA Teaching Project, Magzine',
            'description': 'waiting for things to fall in place just the way I want',
        },
        {
            'name': 'Ayan Das',
            'designation': 'Executive',
            'image': 'images/team1920/ayan.jpg',
            'email': 'mail.ayandas@gmail.com',
            'phone': '8637386908',
            'projects': 'Field of Work : Know Your Rights, Blood Donation Camps, Internships, FB page',
            'description': 'Life has been such an amazing journey!',
        },
        {
            'name': 'Deepanshu Singh',
            'designation': 'Executive',
            'image': 'images/team1920/deepanshu.jpg',
            'email': 'singhdeepanshu2017@gmail.com',
            'phone': '8433091569',
            'projects': 'Field of Work : Blanket Distribution Drive, Apna Parivar, Old Age Home',
            'description': '',
        },
        {
            'name': 'Dev Bisht',
            'designation': 'Executive',
            'image': 'images/team1920/dev.jpg',
            'email': 'bishtdev92@gmail.com',
            'phone': '8630270513',
            'projects': 'Field of Work : Substance Abuse, Blood Donation Camps, Neem School, Magzine',
            'description': 'I would like to watch and play cricket and football.',
        },
        {
            'name': 'Gauri Ninawe',
            'designation': 'Executive',
            'image': 'images/team1920/gauri.jpg',
            'email': 'gn12042409@gmail.com',
            'phone': '9146232801',
            'projects': 'Field of Work : Neem School, Bachpan, Gender Mainstreaming',
            'description': 'My characteristic traits include an unmistakable Marathi accent, a wide smile, and endless love for everyone around me. I am ambitious, and I like my aims to fly high. You\'d mostly find me either diligently fulfilling my responsibilities, playing badminton, or mercilessly mocking my friends.',
        },
        {
            'name': 'Harshvardhan Bothra',
            'designation': 'Executive',
            'image': 'images/team1920/harshvardhan.jpg',
            'email': 'bothraharshvardhan@gmail.com',
            'phone': '7023558505',
            'projects': 'Field of Work : Magazine, Green Warriors, Climate Crusade',
            'description': 'calm, efficient and sarcastic.You may not like me ,but in the end you will be happy',
        },
        {
            'name': 'Jai Arora',
            'designation': 'Executive',
            'image': 'images/team1920/jai.jpg',
            'email': 'jaiarora0011@gmail.com',
            'phone': '7056824407',
            'projects': 'Field of Work : Animal Care, Aarohan, Science Speaks',
            'description': 'I would describe myself as a Foodie Introvert. I like to cooking and travelling is well. As for other things, I\'m a Huge Marvel fan so I\'ll do whatever it takes to help others out.',
        },
        {
            'name': 'Jayesh',
            'designation': 'Executive',
            'image': 'images/team1920/jayesh.jpg',
            'email': 'karwandejayesh10@gmail.com',
            'phone': '9970083356',
            'projects': 'Field of Work : Know Your Rights, Social Innovation Challenge, Nature Lover',
            'description': '',
        },
        {
            'name': 'Kamna Meena',
            'designation': 'Executive',
            'image': 'images/team1920/kamna.jpg',
            'email': 'kamnadhawania@gmail.com',
            'phone': '8130766141',
            'projects': 'Field of Work : VIDYA Teaching Project, Blanket Distribution Drive, Old Age Home',
            'description': 'I love to explore and learn new things.Simple,fun loving and very much optimist.Love traveling,listening to music,dancing',
        },
        {
            'name': 'Kavya Parnami',
            'designation': 'Executive',
            'image': 'images/team1920/kavya.jpg',
            'email': 'kavyap1507@gmail.com',
            'phone': '9999825884',
            'projects': 'Field of Work : Munirka Teaching Project, Nature Lovers, Internships, FB page',
            'description': 'I\'m an awkward introvert who\'s always short of topics when it comes to talk to anyone and can\'t maintain eye contact while talking; but at the same time can chat very nicely ! ',
        },
        {
            'name': 'Mansi Sharma',
            'designation': 'Executive',
            'image': 'images/team1920/mansi.jpg',
            'email': 'mansisharma.mbd@gmail.com',
            'phone': '7726022774',
            'projects': 'Field of Work : Neem School, Animal Care, Internships',
            'description': '"Wonderwoman,now retired.Passed on the legacy to a girl named DIANA"',
        },
        {
            'name': 'Prityush Bansal',
            'designation': 'Executive',
            'image': 'images/team1920/prityush.jpg',
            'email': 'bchakshu14@gmail.com',
            'phone': '8427255282',
            'projects': 'Field of Work : Health Camp, Science Seeds, Social Innovation Challenge, Website',
            'description': 'A Potterhead in this MARVELlous world. A gamer and a foodie with little obsession of literature, music, movies and dogs. Bazinga! Love 3000!',
        },
        {
            'name': 'Rohan Debbarma',
            'designation': 'Executive',
            'image': 'images/team1920/rohan.jpg',
            'email': 'rohan.agartala@gmail.com',
            'phone': '9612483548',
            'projects': 'Field of Work : Aarohan, Bachpan, Website',
            'description': 'An avid reader and listener who is always keen to learn new things. Love to surf the net and have a keen interest in social issues and politics. Huge sports enthusiast (fan only)especially football and tennis.',
        },
        {
            'name': 'Ruhanshi Barad',
            'designation': 'Executive',
            'image': 'images/team1920/ruhanshi.jpg',
            'email': 'bruhanshi8@gmail.com',
            'phone': '9649471177',
            'projects': 'Field of Work : NAB, Gender Mainstreaming, Health Camp, Food4thought',
            'description': 'An explorer and ambivert. I love to travel, eat , play chess , cook. I am good at reading others mind.',
        },
        {
            'name': 'Sanyam Ahuja',
            'designation': 'Executive',
            'image': 'images/team1920/sanyam.jpg',
            'email': 'sanyamahuja1705@gmail.com',
            'phone': '9868880817',
            'projects': 'Field of Work : Green Warriors, Aarohan, 5th Space, Blog',
            'description': 'If you wanted to describe me in a few words, a weeb/Otaku would be a perfect description. As for more about me, I am a history enthusiast, a mute redditor, and obviously an anime/manga fan. Besides that, I love to learn new(and interesting) things everyday, be it history, science, climate, or politics. As for my personal view, I am a cynic. Being one, I often question the very existence of NSS. But when I see people working selfessly, I often feel a sense of hope. That perhaps, I am in the red here. I hope that\'s true.',
        },
        {
            'name': 'Satwik Banchhor',
            'designation': 'Executive',
            'image': 'images/team1920/satwik.jpg',
            'email': 'satwikbanchhor@gmail.com',
            'phone': '7694816212',
            'projects': 'Field of Work : Substance Abuse, Green Warriors, Science Seeds',
            'description': 'I visualize a lot believing that things will eventually just fall in place, you can call me optimistic that way. I ‘am a passionate guy and bring in a lot of intensity into the things that I want to do. I like programming and am a sports and fitness enthusiast.',
        },
        {
            'name': 'Shantanu Agarwal',
            'designation': 'Executive',
            'image': 'images/team1920/shantanu.jpg',
            'email': 'parag676@gmail.com',
            'phone': '8979841200',
            'projects': 'Field of Work : VIDYA Teaching Project, Climate Crusade, Collection Drive, Website',
            'description': 'Simple and fun loving guy, with an interest in almost everything, non-fiction books are my first love and reading them just the next one, and I think and analyze about everything a lot',
        },
        {
            'name': 'Shaurya Goyal',
            'designation': 'Executive',
            'image': 'images/team1920/shaurya.jpg',
            'email': 'shauryagoyal32@gmail.com',
            'phone': '9587714467',
            'projects': 'Field of Work : Munirka Teaching Project, Animal Care, Collection Drive',
            'description': 'Reliable.Adventurer.Cooperative.Living life on my own terms.I am also an animal lover and a Globetrotter.',
        }
    ];

    $scope.pgrep_1920 = [{
            'name': 'Richa',
            'designation': 'PG Rep',
            'image': 'images/team1920/richa.jpg',
            'email': 'richa.ahuja76@gmail.com',
            'phone': '9779623856',
            'projects': 'Field of Work : Munirka Teaching Project, Animal Care, Collection Drive',
            'description': '',
        },
        {
            'name': 'Sweta Choubey',
            'designation': 'PG Rep',
            'image': 'images/team1920/sweta.jpg',
            'email': 'swetachoubey01@gmail.com',
            'phone': '9479587305',
            'projects': 'Field of Work : Climate Crusade, Nature Lovers',
            'description': '',
        }
    ];

    $scope.projrep_2021 = [{
            "description": "Error 404!",
            "designation": "Technical  Rep",
            "email": "rahul220.iit@gmail.com",
            "hostel": "Kumaon",
            "name": "Rahul Parmar",
            "phone": "9340264329",
            "image": "images/team2021/RahulParmar.jpeg"

        },
        {
            "description": "I like to explore and learn new things . Apart from science and math , I have a great knowlege of World history also ,  I have interest in economics . In short I love to solve problems and explore techniques of solving them .",
            "designation": "Technical  Rep",
            "email": "salujajaskeerat@gmail.com",
            "hostel": "Satpura",
            "name": "Jaskeerat Singh Saluja",
            "phone": "9310789300",
            "image": "images/team2021/JaskeeratSinghSaluja.jpg"

        },
        {
            "description": "Why should we work for the society? Oh, I don't know, is it that we collectively thought Steve Jobs was a great man even when we knew he made billions off the backs of children? Or maybe it's that it feels like all our heroes are counterfeit; the world itself's just one big hoax. Spamming each other with our burning commentary of hogwash masquerading as insight, our social media faking as intimacy. Or is it that we voted for this? Not with our elections, but with our things, our property, our money.\nI\'m not saying anything new. We all know why we do this, not because Hunger Games books make us happy but because we wanna be sedated. Because it\'s painful not to pretend, because we\'re cowards. So instead of keeping the dopamine of ignorance or being hooked to our drugs of hope, let\'s just make the society better and Save The World",
            "designation": "Project Rep",
            "email": "vanshg2001@yahoo.com",
            "hostel": "Shivalik",
            "name": "Vansh Gupta",
            "phone": "8800379365",
            "image": "images/team2021/VanshGupta.jpeg"
        },
        {
            "description": "I am fond of music",
            "designation": "Project Rep",
            "email": "2aaryaparashar@gmail.com",
            "hostel": "Himadri",
            "name": "Aarya Parashar",
            "phone": "8185965667",
            "image": "images/team2021/AaryaParashar.jpg"
        },
        {
            "description": "I like exploring new places :)",
            "designation": "Project Rep",
            "email": "rohannagrik25@gmail.com",
            "hostel": "Girnar",
            "name": "Rohan Nagrik",
            "image": "images/team2021/RohanNagrik.jpg"
        },
        {
            "description": "I think I have plenty amount of acetylcholine inside my head which makes me an introvert and shy person. By the way, I like watching cricket and football and I hope that I can continue watching them throughout my life. The meaning of my name is \"Pride\" and I am proud of myself to live in this world.",
            "designation": "Project Rep",
            "email": "gjain28102001@gmail.com",
            "hostel": "Zanskar",
            "name": "Gaurav Jain",
            "phone": "9926179001",
            "image": "images/team2021/Gaurav_Jain.jpg"
        },
        {
            "description": "I am happier than happiest person of the world.If you want to know more about me I will feel very glad in meeting with you",
            "designation": "Project Rep",
            "email": "ankitkumar26012002@gmail.com",
            "hostel": "Aravali",
            "name": "Ankit Kumar",
            "phone": "9334617927",
            "image": "images/team2021/Ankit.jpg"
        },
        {
            "description": "I'm joyful soul who like to spend most of time with plant ,animal and have a great jest of",
            "designation": "Project Rep",
            "email": "jaswant11011@gmail.com",
            "hostel": "shivalik",
            "name": "Jashwant Singh",
            "phone": "7792910964",
            "image": "images/team2021/Jashwant.jpg"
        },
        {
            "description": "I'm a simple fun loving guy who is little camera shy but loves to spend time with friends. Apart from this, playing cricket, travelling and listening to music are my other favourites.",
            "designation": "Project Rep",
            "email": "yadavpk319@gmail.com",
            "hostel": "Karakoram",
            "name": "Prashant Kumar",
            "phone": "7668336480",
            "image": "images/team2021/PrashantKumar.jpg"
        },
        {
            "description": "I am a fascinated observer. I love to explore new places, new people and new things, observe and understand them from various different perspectives and then analyse them completely randomly. I love talking to people, empathise with their understanding of life and have intellectual discussions. Other than this, I am always up for new adventures and good food :)",
            "designation": "Project Rep",
            "email": "uditawadhwa@gmail.com",
            "hostel": "Himadri",
            "name": "Udita Wadhwa",
            "phone": "8547857253",
            "image": "images/team2021/UditaWadhwa.jpeg"
        }
    ];
    $scope.pgrep_2021 = [{
            "description": "I would describe myself as a sincere, hardworking and determined person who is trying to climb to a higher level as per Maslow's motivation theory. I have an interest and jest to learn varied activities and to be able to utilize these skills for a higher purpose in life.",
            "designation": "PG Rep",
            "email": "ishitabhatnagar123@gmail.com",
            "hostel": "Kailash",
            "name": "Ishita Bhatnagar",
            "phone": "8394834109",
            "image": "images/team2021/IshitaBhatnagar.jpeg"
        },
        {
            "description": "A word that would describe me is empathetic. A cheerful person with social work as a passion and aimed at creating an impact in the society along with ensuring personal growth. I enjoy playing badminton and chess the most but indulge in any sport I can participate in. Easily approachable and if needed can be found around food points at the campus :)",
            "designation": "PG Rep",
            "email": "raja.gautam@dmsiitd.org",
            "hostel": "vidhyanchal",
            "name": "Raja Gautam",
            "phone": "7037370300",
            "image": "images/team2021/RajaGautam.jpg"
        },
        {
            "description": "Daily meditator, a great lover of Indian culture and spirituality, never miss an opportunity to help others as true happiness reside there.",
            "designation": "PG Rep",
            "email": "rajdeep.jgd@gmail.com",
            "hostel": "OFF campus",
            "name": "Rajdeep Mazumder",
            "phone": "8399917675",
            "image": "images/team2021/Rajdeep.jpg"
        },
        {
            "description": "I'm a Nature-lover, Problem solver, and an initiator with a love for doing the unconventional. I love to explore and learn new things. I like to interact with new people, make new friends, and to spend time with those who are trying to make a difference. Interested in research in Material and Environmental Sciences.",
            "designation": "PG Rep",
            "email": "sandeepkiitr@gmail.com",
            "hostel": "Off Campus",
            "name": "Sandeep Kushwaha",
            "phone": "7409994799",
            "image": "images/team2021/SandeepKushwahaDMSE.JPG"
        },
        {
            "description": "\r\nI am a great fond of tiny tots and I love to spend time with them. I am very much interested in exploring the hidden secrets of nature. Feeling blessed and so happy that am nearly going to complete a decade in the NSS forum. Praying towards the almighty to give strength and support for serving the people until my soul satisfies.\r\n\r\n\r\n",
            "designation": "PG Rep",
            "email": "ssm.satheesh@gmail.com",
            "hostel": "Karakoram",
            "name": "SATHEESHKANTH S S M",
            "phone": "8838415081",
            "image": "images/team2021/SatheeshkanthSSM.jpeg"
        },
        {
            "description": "I am little introvert and shy person and always curious to interact to new people, making friends. I love watching movies, webseries and travelling. I just started to learn the pool and want to be a pro in it. I am intrested in research in the field of brain biomechanics.",
            "designation": "PG Rep",
            "email": "chandraumesh804@gmail.com",
            "hostel": "Jwalamukhi",
            "name": "Umesh Gautam",
            "phone": "9069883942",
            "image": "images/team2021/UmeshGautam.jpg"
        }
    ];
    $scope.exec_2021 = [{
            "description": "I like to play cricket and am fond of listening to music",
            "designation": "Executive",
            "email": "aarushigupta0923@gmail.com",
            "hostel": "Himadri",
            "name": "Aarushi Gupta",
            "phone": "9992300575",
            "image": "images/team2021/AarushiGupta.JPG",
            "projects": "NAB Hauz Khas, Blanket Distribution drive, Green Warrior + E-Waste"
        },
        {
            "description": "I am a fun loving person with a special liking for travelling and exploring new places. You will mostly find me binge watching TV series/movies or having long conversations with friends.",
            "designation": "Executive",
            "email": "amangupt01@gmail.com",
            "hostel": "Vindhyachal",
            "name": "Aman Gupta",
            "phone": "7410084368",
            "image": "images/team2021/AmanGupta.jpg",
            "projects": "Climate Crusade, Website, Aarohan"
        },
        {
            "description": "I am a proud patron of Thums Up, my forever love. Often I am found shopping to escape this world's sorrows. I also love to narrate stories, fill forms, make posters and presentations for some reason (just not when I have to) but would depend on you to proofread them because I am also very clumsy :p.",
            "designation": "Executive",
            "email": "2001ananyamohit@gmail.com",
            "hostel": "Himadri",
            "name": "Ananya Mohit",
            "phone": "9918599556",
            "image": "images/team2021/AnanyaMohit.PNG",
            "projects": "Gender Mainstreaming, Blog, Climate Crusade, Fb/Insta"
        },
        {
            "description": "Apart from being a professional Netflix binge watcher, I am hardworking, enthusiastic and serious when it comes to work or taking responsibility. I love to draw realistic portrait sketches and dancing. I love meeting new people and learning about their lives and their backgrounds and can almost always find common ground with strangers.",
            "designation": "Executive",
            "email": "aryaryary23@gmail.com",
            "hostel": "Vindhyachal",
            "name": "ARYAN GUPTA",
            "phone": "9811195502",
            "image": "images/team2021/aryanGupta.jpg",
            "projects": "NAB RK Puram, Old Age Home, Munirka"
        },
        {
            "description": "I am a fan of sombre music and literature. I love to have philosophical discussions and I also love to talk about emotions. Reading poems and stories (especially the shady ones) is my hobby. Hit me up if you like listening to emo rap songs!",
            "designation": "Executive",
            "email": "aryanyadav3514@gmail.com",
            "hostel": "Aravali",
            "name": "Aryan Yadav",
            "phone": "8878460066",
            "image": "images/team2021/AryanYadav.jpeg",
            "projects": "Mental Health, Gender Mainstreaming, Fb/Insta"
        },
        {
            "description": "I love to talk to people and also make new friends.I would describe myself as hardworking and enthusiastic.I am a foodie and love to cook for myself.I love watching movies and listening music. Taking selfies is also one of my hobbies!",
            "designation": "Executive",
            "email": "rana123divya@gmail.com",
            "hostel": "Himadri",
            "name": "Divya Rana",
            "phone": "9408332657",
            "image": "images/team2021/DivyaRana.jpg",
            "projects": "NAB Hauz Khas/RK Puram, Vidya, Substance abuse"
        },
        {
            "description": "I'm a fun loving person addicted to novels, good food and more recently-binge watching on netflix. I like to explore new arenas that interest me and I hope to contribute to making this world a better place.",
            "designation": "Executive",
            "email": "aroragopika3@gmail.com",
            "hostel": "Himadri",
            "name": "Gopika Arora",
            "phone": "8287562442",
            "image": "images/team2021/GopikaArora.jpeg",
            "projects": "Substance Abuse, Internships, Gender Mainstreaming, Fb/Insta"
        },
        {
            "description": "chess freak extrovert, keen to explore new domains ,visiting new places, lovesinteract and socialize with people. crazy foodie and night walk lover",
            "designation": "Executive",
            "email": "harsh.diwakirtis@gmail.com",
            "hostel": "Jwalamukhi",
            "name": "Harsh Jain",
            "phone": "8516948686",
            "image": "images/team2021/Harshjain.jpg",
            "projects": "F4T, Nature Lovers, She Codes, Blood Donation"
        },
        {
            "description": "The 'I' in my name stands for ice-cream; everything else is secondary. I love the colour black and often end up buying black stuff somehow; and this is, by far, my number one guilty pleasure. Also, I draw and paint well (this is the one skill I like to brag about).",
            "designation": "Executive",
            "email": "ishita.c22@gmail.com",
            "hostel": "Himadri",
            "name": "Ishita Chaudhary",
            "phone": "8107419310",
            "image": "images/team2021/IshitaChaudhary.jpg",
            "projects": "Munirka, Gender Mainstreaming, Website"
        },
        {
            "description": "A fun loving person who's always up for adventures and traveling. I love listening to music and watching cricket. I love spending time with my friends and talking about anything and everything.",
            "designation": "Executive",
            "email": "ishita6611@gmail.com",
            "hostel": "Himadri",
            "name": "Ishita Garg",
            "phone": "9810674513",
            "image": "images/team2021/IshitaGarg.jpg",
            "projects": "Vidya, Collection Drive, KYR"
        },
        {
            "description": "I'm an introvert who is always ready to help people around. I love reading books and writing. Besides being a huge Harry Potter fan, I also like to read about so-called boring stuff such as philosophy and human behavior. I aspire to make a difference.",
            "designation": "Executive",
            "email": "arjitasingh987@gmail.com",
            "hostel": "Kailash",
            "name": "Jatav Arjitasingh Dineshkumar",
            "phone": "7622992669",
            "image": "images/team2021/Arjita.jpg",
            "projects": "Mental Health, Old Age Home, Nature Lovers"
        },
        {
            "description": "An ambivert who can be found singing to himself (with or without the keys), with an insatiable wanderlust. Also, I love racquet sports. \nPS: I'll probably judge your grammar.",
            "designation": "Executive",
            "email": "kanishksinghal2001@gmail.com",
            "hostel": "Karakoram",
            "name": "Kanishk Singhal",
            "phone": "9116600006",
            "image": "images/team2021/KanishkSinghal.jpeg",
            "projects": "Internships, Blog, Website, KYR"
        },
        {
            "description": "Light hearted person who's always ready to explore new things and wants to travel across the globe! I am bad at starting a conversation but once i get comfortable, it's all really fun and cool. I love cricket and music. Looking forward to having an amazing experience in NSS.",
            "designation": "Executive",
            "email": "khushitekwani2001123@gmail.com",
            "hostel": "Himadri",
            "name": "Khushi Tekwani",
            "phone": "9624598078",
            "image": "images/team2021/KhushiTekwani.PNG",
            "projects": "Know Your Rights(KYR), Old Age Home, Animal Care, Apna Parivaar"
        },
        {
            "description": "I am an inquisitive person who enjoys reading random Wikipedia articles. My interests include Aviation, Formula 1, Mathematics and learning French. I am a quiet person for someone who doesn't know me well but for my friends, I am the one who never stops speaking.",
            "designation": "Executive",
            "email": "pranay9600@gmail.com",
            "hostel": "Kumaon",
            "name": "Pranay Sinha",
            "phone": "9654634221",
            "image": "images/team2021/Pranay_Sinha.jpeg",
            "projects": "Aarohan, Ummeed Bhavan, SIC, Website"
        },
        {
            "description": "A ambivert who wants to live to the fullest and find happiness in every single moment. A nature lover and traveller, wanna explore the unexplored. I love listening music and always ready for some street food.",
            "designation": "Executive",
            "email": "romitkaware@gmail.com",
            "hostel": "Zanskar",
            "name": "Romit kaware",
            "phone": "9637676220",
            "image": "images/team2021/RomitKaware.jpg",
            "projects": "NEEM School, Animal Care, Bachpan, Mental Health"
        },
        {
            "description": "I have an affable kind of personality. I'm addicted to traveling and hanging out with friends. In a relationship with 'Present', Brokeup with 'Past', Not interested in 'Future'. Although I am still continuing to explore myself.\r\nWishing to have a cup of tea with you :)",
            "designation": "Executive",
            "email": "sagar94065@gmail.com",
            "hostel": "Udaigiri",
            "name": "Sagar Gupta",
            "phone": "9406570543",
            "image": "images/team2021/SagarGupta.jpg",
            "projects": "Ummed Bhavan, Animal Care, Nature Lovers, Apna Parivaar"
        },
        {
            "description": "I am an avid reader always ready to explore new things. I am passionate about competitive programming. I am a straight forward person. And I am always on time for my work.",
            "designation": "Executive",
            "email": "saranshagarwal190@gmail.com",
            "hostel": "jwalamukhi",
            "name": "Saransh Agarwal",
            "phone": "8306580369",
            "image": "images/team2021/Saransh_Agarwal.JPG",
            "projects": "Science Seeds, Aarohan, Internships"
        },
        {
            "description": "I am lover of movies and love to explore new things.Highly intrested in art n crafts, economics and it stuff,world politics, mythology and always ready to have an open discussion on any stuff.My most of the time goes reading random articles, watching series and talking to friends.Happily part of NSS family to bring some positive changes!!",
            "designation": "Executive",
            "email": "realityescapesk@gmail.com",
            "hostel": "jwalamukhi",
            "name": "Shivam Kanojia",
            "phone": "9667165816",
            "image": "images/team2021/ShivamKanojia.jpg",
            "projects": "Animal Care, She Codes, Green Warrior + E-Waste"
        },
        {
            "description": "A fun-loving ambivert who loves food, movies and spending time with friends and family. I am pretty ambitious and try to put in 100 percent in whatever I do. I am someone who looks at life optimistically and tries to find happiness in the little things.",
            "designation": "Executive",
            "email": "shlokabhuwalka@gmail.com",
            "hostel": "Kailash",
            "name": "Shloka Bhuwalka",
            "phone": "9727402350",
            "image": "images/team2021/ShlokaBhuwalka.jpg",
            "projects": "Vidya, Blood Donation Camps + Organ Donation, Kilkari"
        },
        {
            "description": "I am a very amicable guy, ready to meet many fun and interesting personalities as part of my NSS experience while helping as many people as I can! I am into video games, anime and multiple sports so feel free to hit me up to discuss about them or to teach me something new :P",
            "designation": "Executive",
            "email": "sids2k@gmail.com",
            "hostel": "Karakoram",
            "name": "Siddhant Sharma",
            "phone": "9953997111",
            "image": "images/team2021/Siddhant_Sharma_smiling.jpg",
            "projects": "Blog, Vidya, Green Warrior + E-Waste"
        },
        {
            "description": "I am a fun-loving person who likes to explore and learn new things. I find myself very close to nature. I love to teach children and interested in cricket. I don't have wings but yeah I like flying.",
            "designation": "Executive",
            "email": "sidhantpr.1645@gmail.com",
            "hostel": "Karakoram",
            "name": "Sidhant Prasad",
            "phone": "8228833199",
            "image": "images/team2021/SidhantPrasad.jpg",
            "projects": "Munirka, Blood Donation Camps + Organ Donation, Nature Lovers, Collection Drive"
        },
        {
            "description": "I'm known for being a great listener and a clear communicator. I am a Foodie-Traveller. My passion is to visit each and every country of the world. Apart from travelling, I like reading crime novels and political texts, listening retro music and watching cricket, kabaddi & badminton.",
            "designation": "Executive",
            "email": "tiwariutkarsh26@gmail.com",
            "hostel": "Zanskar",
            "name": "Utkarsh Tiwari",
            "phone": "9119045858",
            "image": "images/team2021/UtkarshTiwari.jpg",
            "projects": "NEEM School, Bachpan, Substance Abuse"
        },
        {
            "description": "I am a joyful person and loves listening music, playing many different games and always try to learn something new, either from my own mistakes or from virtues of others.",
            "designation": "Executive",
            "email": "vipulgarg98765@gmail.com",
            "hostel": "Vindhyachal",
            "name": "Vipul Garg",
            "phone": "7681916233",
            "image": "images/team2021/VipulGarg.jpg",
            "projects": "Blood Donation Camps + Organ Donation, F4T, Bachpan, Mental Health"
        },
        {
            "description": "I'm ambivert, like to explore new places, can go on reading random articles on internet and columns of newspaper",
            "designation": "Executive",
            "email": "yashyadav4701@gmail.com",
            "hostel": "Kumaon",
            "name": "Yash Yadav",
            "phone": "8529395438",
            "image": "images/team2021/YashYadav.jpg",
            "projects": "Know Your Rights(KYR), Climate Crusade, Blanket Distribution Drive"
        }
    ];
    $scope.secy_2021 = [{
            "description": "I see myself primarily as a beguiling army blood who loves to chatter and entertain people. Also, it's not wrong to say that I am an avid fiction reader and a quick learner. Besides being a crazy foodie and a mad dog lover, I strive to be a patient and a compassionate guy who is always ready to assist you in the best possible way.",
            "designation": "Secretary",
            "email": "adilaggarwal99@gmail.com",
            "hostel": "Satpura",
            "name": "Adil Aggarwal",
            "phone": "9109134477",
            "image": "images/team2021/AdilAggarwal.jpg",
            "projects": "Munirka, Mental Health, Gender Mainstreaming, Animal Care, Designers"
        },
        {
            "description": "An avid learner, with plethora of joy.",
            "designation": "Secretary",
            "email": "bruhanshi8@gmail.com",
            "hostel": "Himadri",
            "name": "Ruhanshi Barad",
            "phone": "9649471177",
            "image": "images/team2021/RuhanshiBarad.jpg",
            "projects": "Food4Thought, NAB, Green Warrior"
        },
        {
            "description": "I don't want to write anything :p, If you want to know about me, then let's grab a cup of coffee and talk.",
            "designation": "Secretary",
            "email": "milirai26@gmail.com",
            "hostel": "Himadri",
            "name": "Aditi Rai",
            "image": "images/team2021/AditiRai.jpeg",
            "projects": "Old Age Home, Mental Health, Bachpan"
        },
        {
            "description": "Simple and fun loving guy, with an interest in almost everything, non-fiction books are my first love, and my piano the next one. My motto: Never settle for anything less than perfect.",
            "designation": "Secretary",
            "email": "parag676@gmail.com",
            "hostel": "Girnar",
            "name": "Shantanu Agarwal",
            "phone": "8979841200",
            "image": "images/team2021/ShantanuAgarwal.jpeg",
            "projects": "Climate Crusade, Vidya, NEEM, Collection Drive"
        },
        {
            "description": "I love to talk to people and discus their problems.Ill describe myself as caring person who loves football,food and music.A hardcore Maharashtrian,we can disuss history of India at any time.Do remeber,if you ever felt sad, just remember there's gap in your fingers, which is to let my fingers slip in :).",
            "designation": "Secretary",
            "email": "karwandejayesh10@gmail.com",
            "hostel": "Kumaon",
            "name": "Jayesh Janardhan Karwande",
            "phone": "9970083356",
            "image": "images/team2021/Jayesh.jpg",
            "projects": "Know Your Rights, Science Seed, Blanket Distribution Drive, SIC"
        },
        {
            "description": "I'm an awkward introvert who's always short of topics when it comes to talk to anyone and can't maintain eye contact while talking; but at the same time can chat very nicely !",
            "designation": "Secretary",
            "email": "kavyap1507@gmail.com",
            "hostel": "Kailash",
            "name": "Kavya Parnami",
            "phone": "9999825884",
            "image": "images/team2021/KavyaParnami.jpg",
            "projects": "Substance Abuse, Nature Lovers, Apna Parivar, Internship"
        },
        {
            "description": "It is very hard to do describe myself when I don't even know what I want. I'm waiting for something to happen to make sense when I know that I need to do something for my life to make sense.",
            "designation": "Secretary",
            "email": "ashpd1710@gmail.com",
            "hostel": "Satpura",
            "name": "Ashish prasad",
            "phone": "9766559517",
            "image": "images/team2021/Ashish_Prasad.jpg",
            "projects": "Umeed Bhawan, NAB, SIC, Blog & Website"
        },
        {
            "description": "I consider myself as an introvert foodie. I am a Cynophilist. I love gaming, cooking and traveling and I am a HUGE Star Wars fan. Hello There!",
            "designation": "Secretary",
            "email": "jaiarora0011@gmail.com",
            "hostel": "Satpura",
            "name": "Jai Arora",
            "phone": "7056824407",
            "image": "images/team2021/Jai.jpeg",
            "projects": "Aarohan, Kilkari, Animal Care"
        },
        {
            "description": "A Potterhead in this MARVELlous world. A gamer and a foodie with little obsession of literature, music, movies and dogs. Bazinga! Love 3000!",
            "designation": "Secretary",
            "email": "bchakshu14@gmail.com",
            "hostel": "Satpura",
            "name": "Prityush Bansal",
            "phone": "8427255282",
            "image": "images/team2021/PrityushBansal.jpg",
            "projects": "She Codes, Blood Donation Camps, SIC, Website"
        }
    ];
    $scope.tech_2021 = [{
        "description": "I love to meet other people and try to learn from them. I play chess, watch movies and listen to music in my leisure time. If you want to know more about me, we can meet and discuss.",
        "designation": "Technical Head",
        "email": "paritoshrajiitd@gmail.com",
        "hostel": "Karakoram",
        "name": "Paritosh Raj",
        "phone": "9462657720",
        "image": "images/team2021/ParitoshRaj.jpg"
    }];
    $scope.gsec_2021 = [{
            "description": "I like to communicate and socialize with people; love to read novels and manga. Interested in research in the field of Molecular Biology, Genetics and Immunology.",
            "designation": "General Secretary",
            "email": "sakshamre@gmail.com",
            "hostel": "Nilgiri",
            "name": "Saksham Sharma",
            "phone": "7303341792",
            "image": "images/team2021/Saksham_Sharma.jpg"
        },
        {
            "description": "Diverse interests. Love playing sports be it Basketball, Badminton, or Table Tennis.Can solve rubiks cube in under a minute! Love performing and watch people perform magic tricks. Travel enthusiast. Talkative.Noob Photography and video editing.",
            "designation": "General Secretary",
            "email": "shivam.rathi1998@gmail.com",
            "hostel": "Shivalik",
            "name": "Shivam Rathi",
            "phone": "9024990841",
            "image": "images/team2021/Shivam_Rathi.jpg"
        }
    ];
    $scope.mentor_2021 = [{
            "description": "I like to explore new domains and fields to find the one that suits me best. I like programming, reading, playing badminton and chess. I love to travel to new places and try different cuisines.",
            "designation": "Team Mentor",
            "email": "aditya.abhishek27@gmail.com",
            "hostel": "Satpura",
            "name": "Aditya Abhishek",
            "phone": "8298091247",
            "image": "images/team2021/Aditya.jpg"
        },
        {
            "description": "I love to explore and learn new things. I am a joyful person. I try to be happy in all the situations. I love painting, acting, listening music and chilling out with friends. I am always very curious to know about other people, and always ready to make new friends.",
            "designation": "Team Mentor",
            "email": "vidarya99@gmail.com",
            "hostel": "Himadri",
            "name": "Vidushi Toshniwal",
            "phone": "9540050334",
            "image": "images/team2021/Vidushi-Toshniwal.jpg"
        }
    ];
    $scope.mentor_2122 = [{
            "name": "Saksham Sharma",
            "email": "sakshamre@gmail.com",
            "designation": "Team Mentor",
            "projects": "",
            "image": "images/team2122/Sakku_Normal.jpg",
            "description": "The only time I feel beautiful is when I look into the mirror of Erised. I'm a bit weird, a bit serious, a bit wholesome, but mostly dumb. Love interacting with new people as much as I love to sleep."
        },
        {
            "name": "Shivam Rathi",
            "email": "shivam.rathi1998@gmail.com",
            "designation": "Team Mentor",
            "projects": "",
            "image": "images/team2122/ShivamRathi.HEIC",
            "description": "Chill out person who loves to hangout, make new friends and explore different places."
        }
    ]
    $scope.gsec_2122 = [{
            "name": "Adil Aggarwal",
            "email": "adilaggarwal99@gmail.com",
            "designation": "General Secretary",
            "projects": "",
            "image": "images/team2122/A-Dil.jpg",
            "description": "A beguiling army brat, you'll always see laughing, giggling and gossiping. Let's vibe to Taylor Swift or share some dog memes xD. Or maybe let's have a completely random conversation on any arbitrary historical event."
        },
        {
            "name": "Kavya Parnami",
            "email": "kavyap1507@gmail.com",
            "designation": "General Secretary",
            "projects": "",
            "image": "images/team2122/Kabbu.jpg",
            "description": "According to the 16 personalities test, I am an ESFJ-T. You'd probably find me shopping, eating some unhealthy stuff (according to my mom), sleeping, or chatting in my free time. Call me, beep me, if you wanna reach me."
        },
        {
            "name": "Shantanu Agarwal",
            "email": "parag676@gmail.com",
            "designation": "General Secretary",
            "projects": "",
            "image": "images/team2122/Saint-anu.jpg",
            "description": "Simple and fun loving guy, with an interest in almost everything, non-fiction books are my first love, and my piano the next one. Also, I am a big Bollywood fan, and I can understand those Bollywood references also quite well :) So feel free to talk to me about Bollywood, anytime."
        }
    ]
    $scope.secy_2122 = [{
            "name": "Rahul Parmar",
            "email": "rahul220.iit@gmail.com",
            "designation": "Technical Secretary",
            "projects": "",
            "image": "images/team2122/Rahul.jpeg",
            "description": "I smile a lot."
        },
        {
            "name": "Aman Gupta",
            "email": "aman.nss9027@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/AmanGupta.jpeg",
            "description": "I am a fun loving person with a special liking for travelling and exploring new places. You will mostly find me binge watching TV series/movies or having long conversations with friends."
        },
        {
            "name": "Ananya Mohit",
            "email": "2001ananyamohit@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/AnanyaMohit.JPG",
            "description": "I am a proud patron of Thums Up, my forever love. Often I am found shopping to escape this world's sorrows. I also love to narrate stories, fill forms, make posters and presentations for some reason (just not when I have to) but would depend on you to proofread them because I am also very clumsy :p."
        },
        {
            "name": "Aryan Gupta",
            "email": "aryaryary23@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/AryanGupta.jpeg",
            "description": "Apart from being a professional Netflix binge watcher, I am hardworking, enthusiastic and serious when it comes to work or taking responsibility. I love to draw realistic portrait sketches and dancing. I love meeting new people and learning about their lives and their backgrounds and can almost always find common ground with strangers."
        },
        {
            "name": "Divya Rana",
            "email": "rana123divya@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/Diboo.jpg",
            "description": "Shopping, eating and travelling - these 3 things define me completely. A patron of rewatching classic series again and again. Always ready for gossips and new whatsapp stickers!"
        },
        {
            "name": "Gopika Arora",
            "email": "aroragopika3@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/Gopu.png",
            "description": "I like to read (fiction mostly), write and float"
        },
        {
            "name": "Harsh Jain",
            "email": "harsh.diwakirtis@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/Harsh.jpg",
            "description": "I am a inquisitive ambivert, foodie and travel freak. Loves to explore nee culture and execute random plans .loquacious person always a valuable for chitchat."
        },
        {
            "name": "Ishita Garg",
            "email": "ishita6611@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/IshitaGarg.jpeg",
            "description": "A carefree ambivert who likes travelling and watching cricket, you'll find me with earphones in pretty much all the time. Always feel free to give me music recommendations. :P"
        },
        {
            "name": "Jatav Arjitasingh Dineshkumar",
            "email": "arjitasingh987@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/Arjita.jpg",
            "description": "I'm an introvert who is always ready to help people around. I love reading books and writing. Besides being a huge Harry Potter fan, I also like to read about so-called boring stuff such as philosophy and human behavior. I aspire to make a difference."
        },
        {
            "name": "Khushi Tekwani",
            "email": "khushitekwani2001123@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/KhushiTekwani.jpg",
            "description": "I'm a light hearted person and an ambivert. I'm always ready to explore new things and to travel across the globe. I love meeting new people and talking to them about anything and everything. I like watching cricket and listening to music almost all the time!"
        },
        {
            "name": "Shloka Bhuwalka",
            "email": "shlokabhuwalka@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/ShlokaBhuwalka.jpeg",
            "description": "A fun-loving ambivert who loves food, movies and spending time with friends and family. I am pretty ambitious and try to put in 100 percent in whatever I do. I am someone who looks at life optimistically and tries to find happiness in the little things."
        },
        {
            "name": "Siddhant Sharma",
            "email": "sids2k@gmail.com",
            "designation": "Secretary",
            "projects": "",
            "image": "images/team2122/Siddhant_Sharma.JPG",
            "description": "Follow me on @sids2k_v2 on ig and sc. I am funny sometimes but mostly sad. Apart from that, love helping out howsoever I can, so hmu :3"
        }
    ]
    $scope.exec_2122 = [{
            name: 'Abhishek Kumar',
            email: 'abhikriitd@gmail.com',
            designation: 'Executive',
            projects: 'Blood Donation,Vidya,E-Novate',
            image: 'images/team2122/Abhishek_Kumar.jpeg',
            description: 'I am a fun loving person who loves listening music, always equipped to meet new people, make new friends, learn new things and currently exploring this world of possibilities.'
        },
        {
            name: 'Ananya Aakriti',
            email: 'ananya.aakriti1@gmail.com',
            designation: 'Executive',
            projects: 'Blog,Vidya,Science Seeds',
            image: 'images/team2122/AnanyaAakriti.jpg',
            description: 'I enjoy having deep, intense conversations with friends and strangers, knowing their perspectives, and expanding my knowledge. I like having meaningful friendships. I\'m a straightforward person who likes to speak and hear the truth. I want to travel the world.'
        },
        {
            name: 'Aryan Sharma',
            email: 'aryanafgji@gmail.com',
            designation: 'Executive',
            projects: 'Mental Health,CC,SIC',
            image: 'images/team2122/AryanSharma.jpeg',
            description: 'I won\'t use any complicated words but i love talking to new people and crtiquing movies. Love keeping myself busy with novels and affection to music :)'
        },
        {
            name: 'Ashish Jagrawal',
            email: 'ashishjagrawal2002@gmail.com',
            designation: 'Executive',
            projects: 'Animal Care,NAB RK Puram,Old Age Home',
            image: 'images/team2122/Ashish_Jagrawal.jpg',
            description: 'I\'m a kind guy who\'s excited to meet a variety of intriguing people while also assisting as many people as possible! I alsoÂ enjoyÂ anime, moviesÂ and a variety of sports, so feel free to contact me if you want to talk about them or tell me something unique :P'
        },
        {
            name: 'Ashutosh Gupta',
            email: 'ashu.asn77@gmail.com',
            designation: 'Executive',
            projects: 'Substance Abuse,Science Seeds,SheCodes,NEEM',
            image: 'images/team2122/AshutoshGupta.jpeg',
            description: 'I\'m an optimistic person having an intuitive mindset. I like to play chess and badminton. I also like photography but still a noob photographer :\') Really lack the words to compliment myself :)'
        },
        {
            name: 'Basani Tharuni',
            email: 'basanitharunireddy20@gmail.com',
            designation: 'Executive',
            projects: 'KYR,SheCodes,GW',
            image: 'images/team2122/Tharuni.jpg',
            description: 'I am a cheerful person and fun to be with, because my favourite colour is yellow.I follow my heart and it says to watch movies whenever I am bored.'
        },
        {
            name: 'Era Sarda',
            email: 'erasarda09@gmail.com',
            designation: 'Executive',
            projects: 'Substance Abuse,GM,Aarohan',
            image: 'images/team2122/EraSarda.jpg',
            description: 'You may sometimes find me as a social media extrovert, but I\'m a big introverted foodie. Nice intriguing conversations, blogs, sports and helping others make me happy :)\nHeyya there !!'
        },
        {
            name: 'Harsha Priya',
            email: 'harsha.priya2902@gmail.com',
            designation: 'Executive',
            projects: 'GM,CC,F4T',
            image: 'images/team2122/HarshaPriya.jpg',
            description: 'An ambivert who wants to explore her versatility. A cheerful personality always ready for adventures. I believe " there is no exercise better for the heart than reaching down and lifting up the people".'
        },
        {
            name: 'J. Ajai',
            email: 'ajaipsbb04@gmail.com',
            designation: 'Executive',
            projects: 'Vidya,Nature Lovers,NAB RK Puram',
            image: 'images/team2122/J.Ajai.jpeg',
            description: 'I am an inquistive person who loves teaching, always ready to help others. Hoping to make more friends and explore new things. Music, cooking and web series fill my free time :)'
        },
        {
            name: 'Jasmeet Kaur Bhatia',
            email: 'jasmeetiitd@gmail.com',
            designation: 'Executive',
            projects: 'Blog,Mental Health,GM',
            image: 'images/team2122/JasmeetKaurBhatia.jpg',
            description: 'A chirpy person, hoping to make lots of new friends, memories and contribute to society\'s greater good:) I relish new experiences and am probably binging, painting, writing, singing, dancing on the sofa in the middle of the night or doing 101 other things that I\'m not supposed to do. I have a thing for blatant humour and would love to talk over a cup of coffee:P'
        },
        {
            name: 'Jyotika Roychowdhury',
            email: 'jyotika.royc@gmail.com',
            designation: 'Executive',
            projects: 'GM,SheCodes,E-Novate',
            image: 'images/team2122/JyotikaRoychowdhury.jpeg',
            description: 'I am an enthusiastic person and I love to explore and discover various things about life in general. I am very passionate about music and I enjoy reading books and writing stuff. Looking forward to working with NSS and making the world a better place to live in...!'
        },
        {
            name: 'Kanishka',
            email: 'ss.kanishka2002@gmail.com',
            designation: 'Executive',
            projects: 'Social Media,Old Age Home,AC,Covid Project',
            image: 'images/team2122/Kanishka.jpeg',
            description: 'An entertaining and really inquisitive ambivert, always ready to listen to you. You can call me anytime to discuss the weirdest things or anything thrilling. Sky really fascinates me, so if interested come sit with me to listen to some music together under the sky full of stars. Really excited to meet y\'all soon! :)'
        },
        {
            name: 'Kartikey Agarwal',
            email: 'sbikartikey0911@gmail.com',
            designation: 'Executive',
            projects: 'Substance Abuse,Old Age Home,Udayan care',
            image: 'images/team2122/KartikeyAgarwal.jpg',
            description: 'D in my name stands for decisive, E in my name stands for excited for everything. I can roam around with anybody and anywhere, and you won\'t get bored. Want to be known as gallivanter. Helping everyone is what I want do in life. Being cute is my thing :P'
        },
        {
            name: 'Khushbu Yadav',
            email: 'khushbu.ydv20@gmail.com',
            designation: 'Executive',
            projects: 'Covid Project,Social Media,GW,F4T',
            image: 'images/team2122/KhushbuYadav.jpeg',
            description: 'They say, "love what you do and do what you love". But sometimes people are just too occupied in life to take a step towards doing what they actually love. So, before i entered that race, i needed to step back and steer towards doing what i actually love and care about. I want to do good for others and I want to put YOU before ME. \nP.S.: I am a much better listener and writer which is why i am a great friend if you want to just sit in silence! (and maybe listen to some music) \n'
        },
        {
            name: 'Laksh Gupta',
            email: 'lakshiitd@gmail.com',
            designation: 'Executive',
            projects: 'Blog,Aarohan,E-Novate',
            image: 'images/team2122/Laksh_Gupta.jpeg',
            description: 'Lover of life & high spirited, he\'s your go to person for any work in Delhi. Once an online fresher, he\'ll tell you diamonds can even be made without any pressure :p'
        },
        {
            name: 'Mudrankit Gupta',
            email: 'mudrankit.cool@gmail.com',
            designation: 'Executive',
            projects: 'Bachpan,CC,SIC,Blog',
            image: 'images/team2122/MudrankitGupta.jpeg',
            description: 'An altrustic and approachable person. An ambivert. I am always IN if u wanna talk or do stupid crazy activities. Quite enthusiastic for trying and learning new things, lover of slow soothing songs, playing and travelling is the only need in life.'
        },
        {
            name: 'Pratik Nimbalkar',
            email: 'pratiknimbalkar0404@gmail.com',
            designation: 'Executive',
            projects: 'KYR,NEEM,AC',
            image: 'images/team2122/Pratik_Nimbalkar.jpg',
            description: 'I\'m just one amongst you all who loves to connect with new people. I am fond of social sciences and love to study history. I have a good hold on history of the Maratha empire. Having done certification in French language, I have an added dimension to my personality. In the end, always keep in mind that I am there for you all just a call away :)'
        },
        {
            name: 'Prisha Jain',
            email: 'prishajain.jain@gmail.com',
            designation: 'Executive',
            projects: 'Aarohan,CC,internships',
            image: 'images/team2122/PrishaJain.jpg',
            description: 'I\'m a person full of life who loves to try, explore and learn new things. You\'ll find me smiling most of the time :) Love to talk, but a good listener as well, so if you\'re an extrovert , hit me up, if not, hit me up!'
        },
        {
            name: 'Priyal Shah',
            email: 'shahpriyal2002@gmail.com',
            designation: 'Executive',
            projects: 'KYR,SIC,AC',
            image: 'images/team2122/PriyalShah.jpg',
            description: 'A socially awkward extrovert who goes from super excited to super bored real quick. I love to make new friends and I can cook and paint for you just to make you happy but mostly you\'ll find me eating, sleep or binge watching. :)'
        },
        {
            name: 'Purvi Balot',
            email: 'purvibalot2205@gmail.com',
            designation: 'Executive',
            projects: 'Blood Donation,Vidya,Science Seeds',
            image: 'images/team2122/Purvi_Balot.jpg',
            description: 'I am an introvert unless you talk two to three times after which i can chat with anyone non stop. I love reading books and music. I am an easy going person who you can come to with any problem, anytime and i would try my best to help out.'
        },
        {
            name: 'Shriya Gharat',
            email: 'shriyagharat7@gmail.com',
            designation: 'Executive',
            projects: 'Old Age Home,F4T,Udayan Care,internships',
            image: 'images/team2122/ShriyaGharat.jpg',
            description: 'Heyyy!\nI am Shriya. I love to talk a lot and sometimes I ( try to) sing too . \nMoreover, I love talking and connecting with new people, so ping me anytime to know me more :)'
        },
        {
            name: 'Sonali Kanwar Rathore',
            email: 'sonalikanwarr@gmail.com',
            designation: 'Executive',
            projects: 'Aarohan,Nature Lovers,Internships',
            image: 'images/team2122/SonaliKanwar.jpeg',
            description: 'I am a passionate learner, very light hearted and supportive person. I like bright colours ,love fantasy and fond of street foods. I have "extra phalangeal crease" in fingers and can wiggle both ears simultaneously , hence a rare creature.'
        },
        {
            name: 'Stitiprajna Sahoo',
            email: 'stitisahoo18@gmail.com',
            designation: 'Executive',
            projects: 'Social Media,NEEM,GW,Bachpan',
            image: 'images/team2122/StitiprajnaSahoo.jpg',
            description: 'A cheerful person always ready to help :). Singing is my hobby as well as passion. To add, I am crazy for shopping as well. I love to smile and aspire to bring smiles on others\' faces as well.'
        },
        {
            name: 'Tanya Prakash',
            email: 'tanyaprakash2205@gmail.com',
            designation: 'Executive',
            projects: 'Mental Health,NEEM,Nature Lovers',
            image: 'images/team2122/TanyaPrakash.jpg',
            description: 'An introvert who loves sky-gazing, reading, and helping others. I believe in bringing changes and smiles. You don\'t know me if you haven\'t heard me singing. Bazinga:)'
        },
        {
            name: 'Tejas Kasture',
            email: 'tejas.kasture@gmail.com',
            designation: 'Executive',
            projects: 'KYR,Udayan Care,Nature Lovers\t',
            image: 'images/team2122/TejasKasture.jpg',
            description: 'I have a warm and kind demeanour. I enjoy conversing with people, empathising with their perspectives on life, and engaging in intellectual debates.'
        }
    ];
    $scope.pgrep_2122 = [{
            "name": "Kushagra Rode",
            "email": "kushagrarode27@gmail.com",
            "designation": "Technical Executive",
            "projects": "",
            "image": "images/team2122/KushagraRode.jpeg",
            "description": "I am a fun loving person who loves watching as well as playing Cricket and Football. It takes me some time to get comfortable with people though after that I enjoy a lot talking with them."
        },
        {
            "name": "Rashmi Thakur",
            "email": "rashmi.lata151@gmail.com",
            "designation": "Technical Executive",
            "projects": "",
            "image": "images/team2122/Rashmi.jpg",
            "description": "An introvert, May take some time to open up but once done, you'll get to see an entirely new version of me.Eager to learn new things, write poems ocassionally.Psychology,Human emotions, people interests me."
        },
        {
            "name": "Prakhar Singhal",
            "email": "ps2002.work@gmail.com",
            "designation": "Technical Executive",
            "projects": "Yes, i manage this webpage",
            "image": "images/team2122/PrakharSinghal.jpg",
            "description": "A musician turned Debator turned coder , someone who is always willing to take up new challenges and grow . I play the piano, some times blindfolded too :p . I love travelling , exploring and meeting new people . Feeling vibed ? Heyyy lets have a chat!"
        }
    ]
    $scope.projrep_2122 = [{
            "name": "Vardan Saxena",
            "email": "vardan.saxena97@gmail.com",
            "designation": "PG Representative",
            "projects": "Vidya",
            "image": "images/team2122/VardanSaxena.jpg",
            "description": "Apart from rewatching 'The Office', i also like to play guitar. Occasionally, I also play Basketball and CSGO. I am an ambivert person. I like to do research in the fields of sustainable energy development. Feel free to hit me up for a discussion"
        },
        {
            "name": "VIDHANSHU JAIN",
            "email": "vidhanshu19@gmail.com",
            "designation": "PG Representative",
            "projects": "Blood Donation",
            "image": "images/team2122/VidhanshuJain.jpeg",
            "description": "Never to Give Up is Key Motto. Always Ready to help .I like to Interact with other people and share Views and idea. My mantra \"JIO AUR JEENE DO\""
        },
        {
            "name": "Aman Kumar",
            "email": "amanyogeshjain@gmail.com",
            "designation": "PG Representative",
            "projects": "NEEM",
            "image": "images/team2122/AmanKumar.jpg",
            "description": "Avid learner, like to explore new domains & things. I love to interact with more & more people."
        },
        {
            "name": "Sayantani Banerjee",
            "email": "banerjeesayantani01@gmail.com",
            "designation": "PG Representative",
            "projects": "NAB RK Puram",
            "image": "images/team2122/SayantaniBanerjee.jpg",
            "description": "An ambivert, multitasker and a hedonist. I am here to share a little part of the privilege I am born with and stay in. In exchange, I am already learning so much. Please feel free to connect with me!"
        },
        {
            "name": "Lakshay Jora",
            "email": "lakshayjora11@gmail.com",
            "designation": "PG Representative",
            "projects": "Substance Abuse",
            "image": "images/team2122/LakshayJora.jpg",
            "description": "A Geopolitical enthusiast who love to deal with human emotions and sometimes wrote."
        }
    ]






});