var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var fs = require('fs');
var pdf = require('./newFile.js');

var bloglist = {
    October: {
        month: 'October',
        number: 2,
        blogs: [
            {
                blogTitle: 'Iot Basics',
                blogContent: 'The Internet of Things (IoT) is the network of physical ' +
                'objects or "things" embedded with electronics, software, sensors, and network connectivity, ' +
                'which enables these objects to collect and exchange data.[1] The Internet of Things allows objects ' +
                'to be sensed and controlled remotely across existing network infrastructure,[2] creating opportunities ' +
                'for more direct integration between the physical world and computer-based systems, and resulting in ' +
                'improved efficiency, accuracy and economic benefit. Each thing is uniquely identifiable ' +
                'through its embedded computing system but is able to interoperate within the existing Internet ' +
                'infrastructure. Experts estimate that the IoT will consist of almost 50 billion objects by 2020.'
            },
            {
                blogTitle: 'Applications of IoT',
                blogContent: 'According to Gartner, Inc. (a technology research and advisory corporation), ' +
                'there will be nearly 26 billion devices on the Internet of Things by 2020.[35] ABI Research ' +
                'estimates that more than 30 billion devices will be wirelessly connected to the Internet ' +
                'of Things by 2020.[36] As per a recent survey and study done by Pew Research Internet Project, ' +
                'a large majority of the technology experts and engaged Internet users who responded—83 percent—agreed ' +
                'with the notion that the Internet/Cloud of Things, embedded and wearable computing ' +
                '(and the corresponding dynamic systems[37]) will have widespread and beneficial ' +
                'effects by 2025.[38] It is, as such, clear that the IoT will consist of a very large number' +
                ' of devices being connected to the Internet.[39] In an active move to accommodate new and ' +
                'emerging technological innovation, the UK Government, in their 2015 budget, ' +
                'allocated £40,000,000 towards research into the Internet of Things. The British Chancellor of ' +
                'the Exchequer George Osborne, posited that the Internet of Things is the next stage of the ' +
                'information revolution and referenced the inter-connectivity of everything from urban transport ' +
                'to medical devices to household appliances.['
            }
        ]
    },
    September: {
        month: 'September',
        number: 2,
        blogs: [
            {
                blogTitle: 'Big Data Basics',
                blogContent: 'Big data is a broad term for data sets so large or complex that traditional ' +
                'data processing applications are inadequate. Challenges include analysis, capture, data curation, ' +
                'search, sharing, storage, transfer, visualization, and information privacy. The term often ' +
                'refers simply to the use of predictive analytics or other certain advanced methods to extract ' +
                'value from data, and seldom to a particular size of data set. Accuracy in big data may lead to ' +
                'more confident decision making. And better decisions can mean greater operational efficiency, ' +
                'cost reduction and reduced risk. Analysis of data sets can find new correlations, to "spot business ' +
                'trends, prevent diseases, combat crime and so on." Scientists, business executives, practitioners ' +
                'of media, and advertising and governments alike regularly meet difficulties with large data sets in ' +
                'areas including Internet search, finance and business informatics. Scientists encounter limitations ' +
                'in e-Science work, including meteorology, genomics, connectomics, complex physics simulations,' +
                ' and biological and environmental research.'
            },
            {
                blogTitle: 'Big Data Characteristics',
                blogContent: 'Volume The quantity of generated data is important in this context. ' +
                'The size of the data determines the value and potential of the data under consideration, ' +
                'and whether it can actually be considered big data or not. The name ‘big data’ itself ' +
                'contains a term related to size, and hence the characteristic. Variety. The type of content, ' +
                'and an essential fact that data analysts must know. This helps people who are associated with ' +
                'and analyze the data to effectively use the data to their advantage and thus uphold its importance. ' +
                'Velocity. In this context, the speed at which the data is generated and processed to meet ' +
                'the demands and the challenges that lie in the path of growth and development. Variability. ' +
                'The inconsistency the data can show at times—-which can hamper the process of handling ' +
                'and managing the data effectively. Veracity. The quality of captured data, which ' +
                'can vary greatly. Accurate analysis depends on the veracity of source data. Complexity.' +
                'Data management can be very complex, especially when large volumes of data come ' +
                'from multiple sources. Data must be linked, connected, and correlated so users can grasp ' +
                'the information the data is supposed to convey.'
            }
        ]
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/bigdata', function(req, res, next) {
    res.render('bigdata');
});

router.get('/brochure', function(req, res, next) {
    res.render('brochure');
});

router.post('/saveUserData', function(req, res, next) {
    // save user data here
    console.log(req.body);
    res.end();
});

router.get('/whitepaper', function(req, res, next) {
    res.setHeader('Content-type', 'application/pdf');
    res.setHeader('Content-disposition', 'attachment; filename=WhitePaper.pdf');
    res.setHeader("Content-Transfer-Encoding",  "binary");
    pdf.readfile(function(doc) {
        res.send(doc.data.buffer)
        res.end();
    });
});

router.get('/iot', function(req, res, next) {
    res.render('iot');
});

router.get('/blog', function(req, res, next) {
    res.render('blog', {bloglist: bloglist});
});

router.get('/Management', function(req, res, next) {
    res.render('management');
});

router.get('/Locations', function(req, res, next) {
    res.render('locations');
});


module.exports = router;
