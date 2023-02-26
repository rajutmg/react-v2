import React from "react";
import Header from "../../components/header";
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const RegisterUI = ({
  form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors },
}) => {
  return (
    <>
      <Header />
      <section className="secGap">
        <Grid centered>
          <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
            <SemanticHeader>Signup Here</SemanticHeader>
            <Segment>
              <Form>
                <Form.Field>
                  <Form.Input
                    value={form.name || ""}
                    onChange={onChange}
                    name="name"
                    placeholder="name"
                    label="Name"
                    error={
                      fieldErrors.name && {
                        content: fieldErrors.name,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.email || ""}
                    onChange={onChange}
                    name="email"
                    type="email"
                    placeholder="Email"
                    label="Email"
                    error={
                      fieldErrors.email && {
                        content: fieldErrors.email,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.password || ""}
                    onChange={onChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    label="Password"
                    error={
                      fieldErrors.password && {
                        content: fieldErrors.password,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.c_password || ""}
                    onChange={onChange}
                    type="c_password"
                    name="c_password"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    error={
                      fieldErrors.c_password && {
                        content: fieldErrors.c_password,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.phone_number || ""}
                    onChange={onChange}
                    type="number"
                    name="phone_number"
                    placeholder="Phone number"
                    label="Phone Number"
                    error={
                      fieldErrors.phone_number && {
                        content: fieldErrors.phone_number,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.district_id || ""}
                    onChange={onChange}
                    type="number"
                    name="district_id"
                    placeholder="District"
                    label="District"
                    error={
                      fieldErrors.district_id && {
                        content: fieldErrors.district_id,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.ward_id || ""}
                    onChange={onChange}
                    type="number"
                    name="ward_id"
                    placeholder="Ward"
                    label="Ward"
                    error={
                      fieldErrors.ward_id && {
                        content: fieldErrors.ward_id,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.municipality_id || ""}
                    onChange={onChange}
                    type="number"
                    name="municipality_id"
                    placeholder="Municipality"
                    label="Municipality"
                    error={
                      fieldErrors.municipality_id && {
                        content: fieldErrors.municipality_id,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    value={form.company_id || ""}
                    onChange={onChange}
                    type="number"
                    name="company_id"
                    placeholder="Company"
                    label="Company"
                    error={
                      fieldErrors.company_id && {
                        content: fieldErrors.company_id,
                        pointing: "below",
                      }
                    }
                  />
                </Form.Field>
                <Button
                  onClick={onSubmit}
                  disabled={registerFormValid || loading}
                  fluid
                  loading={loading}
                  primary
                  type="submit"
                >
                  Submit
                </Button>
              </Form>

              <Segment>
                Already have an account? <Link to="/auth/login">Login</Link>.
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </section>
    </>
  );
};

export default RegisterUI;
