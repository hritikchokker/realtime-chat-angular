import { BaseFormClass } from './base-form-class'
import { Directive } from "@angular/core"
import { FormGroup } from '@angular/forms'

interface ITestData {
  name: string
}

@Directive()
class TestFormComponent extends BaseFormClass<ITestData> {
  buildForm(): FormGroup {
    return jasmine.createSpyObj('form', [])
  }
}

describe('BaseFormComponent', () => {
  it('should create an instance', () => {
    expect(new TestFormComponent()).toBeTruthy()
  })
})
