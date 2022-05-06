import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

interface LoginProps {
  login: (details: {
    username: string;
    email: string;
    password: string;
  }) => void;
  error: string;
}

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const LoginForm = ({ login, error }: LoginProps) => {
  const onFinish = (values: any) => {
    login(values);
  };

  return (
    <Wrapper>
      <WrapperForm>
        <Form
          {...layout}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Row gutter={[8, 8]}>
            <Title>
              <h1>Login</h1>
              username: admin@gmail.com <br></br>
              password: admin123
              <p style={{ color: "red" }}>{error ? error : ""}</p>
            </Title>

            <Col span={24}>
              <FormItem
                label="User name"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </FormItem>
            </Col>

            <Col span={12}>
              <FormItem name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </FormItem>
            </Col>
            <Col span={12} style={{ textAlign: "end" }}>
              <FormItem name="forgot-password">
                <Button type="link" href="/forgot-password" size="large">
                  Forgot password
                </Button>
              </FormItem>
            </Col>
          </Row>

          <FormItem style={{ textAlign: "center" }}>
            <LoginButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </LoginButton>
            Or <a href="/register">register now!</a>
          </FormItem>
        </Form>
      </WrapperForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperForm = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 32px;
  background-color: white;
  border-radius: 5px;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: 12px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const FormItem = styled(Form.Item)`
  display: flex;
  justify-content: space-between;

  label {
    font-weight: bold;
  }
`;
