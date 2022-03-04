const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  alias: {
    type: String,
    default: ''
  },
  attendees: [
    {
      type: String,
      default: ''
    }
  ],
  body: {
    type: String,
    default: ''
  },
  buildingId: {
    type: Number,
    default: 0
  },
  buildingName: {
    type: String,
    default: ''
  },
  changeKey: {
    type: String,
    default: ''
  },
  dayNames: [
    {
      type: String,
      default: ''
    }
  ],
  elementId: {
    type: Number,
    default: 0
  },
  end: {
    type: String,
    default: ''
  },
  externalUser: {
    type: Boolean,
    default: true
  },
  floorNumber: {
    type: Number,
    default: 0
  },
  hasEnd: {
    type: Boolean,
    default: true
  },
  insertedAt: {
    type: String,
    default: 'yyyy-MM-dd\'T\'HH:mm:ss'
  },
  itemId: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  mailOfReservationInitiator: {
    type: String,
    default: ''
  },
  meetingProviderData: {
    authorizationCode: {
      type: String,
      default: ''
    },
    generateMeetingJoinUrl: {
      type: Boolean,
      default: true
    },
    meetingId: {
      type: Number,
      default: 0
    },
    meetingJoinUrl: {
      type: String,
      default: ''
    },
    meetingPassCode: {
      type: String,
      default: ''
    },
    meetingUrlProvider: {
      type: String,
      default: 'ZOOM'
    }
  },
  meetingType: {
    type: String,
    default: 'I'
  },
  numberOfOccurrences: {
    type: Number,
    default: 0
  },
  occurrencesEnd: {
    type: String,
    default: 'yyyy-MM-dd\'T\'HH:mm:ss'
  },
  officeName: {
    type: String,
    default: ''
  },
  presenter: {
    type: String,
    default: ''
  },
  presenters: [
    {
      presenter: {
        type: String,
        default: ''
      },
      topic: {
        type: String,
        default: ''
      },
    }
  ],
  reservationId: {
    type: Number,
    default: 0
  },
  reservationStatus: {
    type: String,
    default: 'PENDING'
  },
  start: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  topic: {
    type: String,
    default: ''
  },
  userEmail: {
    type: String,
    default: ''
  },
  userFullName: {
    type: String,
    default: ''
  },
  userOofSettingsData: {
    allowExternal: {
      type: String,
      default: ''
    },
    endTime: {
      type: String,
      default: ''
    },
    externalMessage: {
      type: String,
      default: ''
    },
    externalMessageLang: {
      type: String,
      default: ''
    },
    internalMessage: {
      type: String,
      default: ''
    },
    internalMessageLang: {
      type: String,
      default: ''
    },
    isOutOfOffice: {
      type: Boolean,
      default: true
    },
    startTime: {
      type: String,
      default: ''
    },
  },
}, {collection: "Events"});

module.exports = mongoose.model('Event', EventSchema)
