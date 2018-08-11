import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Table from '../components/Table'
import { Modal, Form, Input, Button } from 'antd';

const FormItem = Form.Item;

function IndexPage({ api, loginurl, logouturl, sources=[] }) {
  console.log(api, loginurl, logouturl, sources)
  return (
    <div className={styles.normal}>
      <Table />
      <Form inline="true" onSubmit={e => {
        console.log(e)
      }}>
        <Modal title="第一个 Modal" visible={!api || !loginurl || !logouturl}
          onOk={() => {
            console.log('ok')
          }}
          onCancel={() => {
            console.log('cancel')
          }}
          footer={[
            <Button key="back" type="ghost">取 消</Button>,
            <Button key="submit" type="primary">提 交</Button>
          ]}
        >
          {!api ? <FormItem
            id="api"
            label="API：">
            <Input placeholder="https://www.example.com" id="api" name="api" onChange={(e) => {
            }} />
          </FormItem> : null }
          {!loginurl || !logouturl ? <FormItem
            id="loginurl"
            label="登录地址：">
            <Input placeholder="/api/login" id="loginurl" name="loginurl" onChange={(e) => {
            }}/>
          </FormItem> : null }
          {!loginurl || !logouturl ? <FormItem
            id="logouturl"
            label="注销地址：">
            <Input placeholder="/api/logout" id="logouturl" name="logouturl" onChange={(e) => {
            }}/>
          </FormItem> : null }
        </Modal>
      </Form>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({table}) => {
  return table
})(IndexPage);

