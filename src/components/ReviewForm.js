import React from "react"

import { Form } from 'semantic-ui-react'

const ReviewForm = ({ food, wine }) => {

  const handleChange = (e, { value }) => console.log({ value })

  return (
    <div className="reviewForm">
      <Form>
        <Form.Group>
          <Form.Radio
            value='1'
            checked={false}
            onChange={handleChange}
          />
          <Form.Radio
            value='2'
            checked={false}
            onChange={handleChange}
          />
          <Form.Radio
            value='3'
            checked={false}
            onChange={handleChange}
          />
          <Form.Radio
            value='4'
            checked={false}
            onChange={handleChange}
          />
          <Form.Radio
            value='5'
            checked={false}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.TextArea label='Review (Optional)' placeholder='Tell us more about the pairing...' />
        <Form.Button>Submit Review</Form.Button>
      </Form>
    </div>
  )
}

export default ReviewForm
