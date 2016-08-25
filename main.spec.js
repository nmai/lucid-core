'use strict'
let Core = require('./lib/core').Core
let expect = require('chai').expect

describe('client', () => {
  it ('should print test shit', () => {
    const core = new Core()
    expect(core.process()).to.equal(2)
  })
  it ('should receive messages', () => {
    
  })
  it ('should resolve a change approval properly', () => {
    
  })
  it ('should resolve a conflicting change response', () => {
    
  })

  it ('should track revision and pending revision', () => {

  })
  it ('should send a message with a properly formatted operation', () => {

  })


  // optional
  it ('should aggregate a list of pending operations before sending', () => {

  })
})