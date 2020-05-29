/**
 * My API Sandbox
 * 
 */
Sandbox.define('/AgentServices/jaxrs/v1/agent-data', 'GET', function(req, res) {

    res.status(200);

    res.json(
        {
          "apAgentDTO": {
            "agentNum": 10234016,
            "agentCoCode": 102,
            "cityStateZipText": "Rockford,IL,61016",
            "faxPhoneNum": "9845632176",
            "locAddr1Text": "7",
            "locAddr2Text": "",
            "name1Name": "Bob",
            "regnCode": 638012,
            "spclReinsAgreNum": 19005
          },
          "apAgentPrdcrDTOs": [
            {
              "agentNum": 10234016,
              "coCode": 3008,
              "prdcrSeqNum": 509,
              "firstName": "Andy",
              "lastName": "Williams",
              "middleInitial": "B",
              "nameTypeCode": "205",
              "prdcrCode": 843
            }
          ],
          "apPrdcrStateDTOs": [
            {
              "agentNum": 10234016,
              "coCode": 3008,
              "prdcrSeqNum": 509,
              "stateCode": "91",
              "stateTypeCode": "91"
            }
          ]
        }

    );
});





Sandbox.define('/InsuranceApplicationServices/jaxrs/application-track-entry/search', 'POST', function(req, res) {

    // Check the request, make sure it is a compatible type
    if(req.body.agencyNumbe<0)
    {
        return res.send(400, 'Invalid agencyNumber, expected agencyNumber');
    }

    // Set the type of response, sets the content type.
    res.type('application/json');

    // Set the status code of the response.
    res.status(200);

    // Send the response body.
    res.json(
        
        {
          "records": [
            {
              "applicationNumber": "127895",
              "applicationStatus": "live",
              "opid": "32423",
              "agent": "James",
              "effectiveDate": "14-05-2020",
              "insuredName": "ABC Truck",
              "city": "Madison",
              "underwriter": "Smith",
              "region": "NY",
              "applicationCoverages": [],
              "finalCodes": [],
              "comments": [],
              "finalDate": "14-05-2020",
              "finalTime": "12:45:00 PM",
              "email": "Smith@abc.com",
              "businessPhone": "+1 324-356-365",
              "cellPhone": "234 234 234",
              "zipCode": "53558",
              "zipCodeExtension": "456"
            },
              {
               "applicationNumber": "12789",
              "applicationStatus": "live",
              "opid": "32423",
              "agent": "Robert",
              "effectiveDate": "14-05-2020",
              "insuredName": "ABC Truck",
              "city": "Madison",
              "underwriter": "Smith",
              "region": "NY",
              "applicationCoverages": [],
              "finalCodes": [],
              "comments": [],
              "finalDate": "14-05-2020",
              "finalTime": "12:45:00 PM",
              "email": "Smith@abc.com",
              "businessPhone": "+1 324-356-365",
              "cellPhone": "234 234 234",
              "zipCode": "53558",
              "zipCodeExtension": "456"
            }
          ],
          "total": 2
        }
    );
});



Sandbox.define('/PolicyServices/jaxrs/policy/base-details', 'GET', function(req, res) {


  
    // Set the status code of the response.
    res.status(200);

    // Send the response body.
    res.json(
        {
	"policyNumber": "WC3456A",
	"policyTypeCode": "WC",
	"policyFolderId": 1234,
	"applicationNumber": 765789,
	"effectiveDate": "2020-05-04",
	"expirationDate": "2021-05-04",
	"directBill": false,
	"insured": {
		"customerNumber": 987654,
		"name": "ABC TRUCKING",
		"businessPhoneNumber": "712-123-4567",
		"physicalAddress": {
			"addressLine1": "1234 Main St",
			"addressLine2": "",
			"city": "Madison",
			"state": "WI",
			"zip": "51106"
		}
	},
	"agency": {
		"code": "0180",
		"name1": "ASSUREDPARTNERS OF OHIO LLC",
		"phoneNumber": "614-442-1400",
		"physicalAddress": {
			"addressLine1": "1234 Main St",
			"addressLine2": "",
			"city": "Madison",
			"state": "WI",
			"zip": "51106"
		}
	},
	"producer": {
		"code": 15,
		"fullName": "Steve Rogers"
	},
	"underwriter": {
		"code": "AB",
		"name": "Bob Bright",
		"userId": "bbrigh0"
	}
}

    );
});

Sandbox.define('/InsuranceApplicationServices/jaxrs/applications/policy-folder', 'POST', function(req, res) {
    res.status(200);
    // Send the response body.
    res.json(
        
        {
          "folderId": 675,
          "applicationNumber": 90087
        }

    );
});

Sandbox.define('/application-track-entry/{applnNum}', 'POST', function(req, res) {
    res.status(200);
    // Send the response body.
     res.json(
        
        {
          "folderId": 675,
          "applicationNumber": 90087
        }

    );
});

Sandbox.define('/PolicyServices/jaxrs/policy-folder/document-types', 'GET', function(req, res) {


  
    // Set the status code of the response.
    res.status(200);

    // Send the response body.
    res.json(
       {
        "docTypeId": 4,
        "description": "General Correspondence",
        "requiredForApplication": false,
        "requiredForEndorsement": false,
        "requiredForRenewal": false
      }

    );
});