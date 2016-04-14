package agsocket

// Request struct is the skeleton of the websocket request
type Request struct {
	ActionType string  `json:"actionType"`
	Payload    Payload `json:"payload"`
}

// Payload is the data that might be send with request
type Payload struct {
	// TODO: add more fields
	User string `json:"username"`
	Mode string `json:"mode"`
}

// Response is the json of the struct created
type Response struct {
	ActionType string      `json:"actionType"`
	Payload    interface{} `json:"payload"`
}
